import React from 'react';
import {Button, Typography} from "antd";
import {ReviewsResponseModel} from "../../models";
import ReviewItem from "./ReviewItem";
import {useFetchData} from "../../hooks";
import styled from "styled-components";
import {useInfiniteQuery} from "@tanstack/react-query";
import axios from "axios";


const StyledTitle = styled(Typography.Title)`
    margin-bottom: 20px; /* Space below the title */
`;

const ReviewContainer = styled.div`
    margin-top: 20px;
`;

const NoDataTitle = styled(Typography.Title)`
    margin-top: 20px;
`;

interface ReviewsListProps {
  movieId: string
}

const ReviewsList = ({movieId}: ReviewsListProps) => {

  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["reviews"],
    queryFn: async ({pageParam}): Promise<ReviewsResponseModel | undefined> => {
      try {
        const {data} = await axios.get<ReviewsResponseModel>(
          `https://api.kinopoisk.dev/v1.4/review?movieId=${movieId}&page=${pageParam}&limit=10`, {
            headers: {
              'X-API-Key': 'T6Z3RCY-8PJ4B99-M3KQ3MD-H97NKNF'
            }
          }
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage?.page as number) + 1 ?? undefined,
  });


  return (
    <>
      <StyledTitle level={2}>Reviews:</StyledTitle>
      <ReviewContainer>
        {data && data.pages.length > 0 && data.pages.map((page) => (
          page.docs.map((review) => (
            <div key={review.id}>
              <ReviewItem review={review}/>
            </div>
          ))
        ))}
      </ReviewContainer>
      {hasNextPage &&
        <Button onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : 'Load More Reviews'}
        </Button>
      }
    </>
  );
};

export default ReviewsList;