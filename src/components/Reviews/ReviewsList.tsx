import React from 'react';
import { Typography } from "antd";
import { ReviewsResponseModel } from "../../models";
import ReviewItem from "./ReviewItem";
import { useFetchData } from "../../hooks";
import styled from "styled-components";


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

const ReviewsList = ({ movieId }: ReviewsListProps) => {
  const { data } = useFetchData<ReviewsResponseModel>(`https://api.kinopoisk.dev/v1.4/review`, {
    movieId,
    page: 1,
    limit: 10
  });

  return (
    <>
      <StyledTitle level={2}>Reviews:</StyledTitle>
      {data && data.docs.length > 0 ? (
        <ReviewContainer>
          {data.docs.map(review => (
            <div key={review.id}>
              <ReviewItem review={review} />
            </div>
          ))}
        </ReviewContainer>
      ) : (
        <NoDataTitle level={5}>There is no Data</NoDataTitle>
      )}
    </>
  );
};

export default ReviewsList;