import React from 'react';
import {Button, Typography} from "antd";
import {ReviewsResponseModel} from "../../models";
import ReviewItem from "./ReviewItem";
import styled from "styled-components";
import {useInfiniteQuery} from "@tanstack/react-query";
import axios from "axios";
import {API_KEY, baseUrl} from "../../constants";


const ReviewContainer = styled.div`
    margin-top: 20px;
`;

const Wrapper = styled.div`
    text-align: center;
`;

interface ReviewsListProps {
    movieId: string
}

const ReviewsList = ({movieId}: ReviewsListProps) => {
    const fetchReviews = async (pageParam: number): Promise<ReviewsResponseModel | undefined> => {
        try {
            const {data} = await axios.get<ReviewsResponseModel>(
                `${baseUrl}/review?movieId=${movieId}&page=${pageParam}&limit=10`, {
                    headers: {
                        'X-API-Key': API_KEY
                    }
                }
            );
            return data;
        } catch (err) {
            console.log(err);
        }
    }
    const {
        data,
        isFetchingNextPage,
        fetchNextPage,
        isLoading,
        hasNextPage,
    } = useInfiniteQuery({
        queryKey: ["reviews"],
        queryFn: ({pageParam}) => fetchReviews(pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            return lastPage.page + 1 <= lastPage.pages ? lastPage.page + 1 : undefined
        },
    });


    return (
        <>
            {isLoading ? <Typography.Title level={3}>Fetching reviews...</Typography.Title>
                :
                <>
                    <ReviewContainer>
                        {data && data.pages.length > 0 && data.pages.map((page) => (
                            page.docs.map((review) => (
                                <div key={review.id}>
                                    <ReviewItem review={review}/>
                                </div>
                            ))
                        ))}
                    </ReviewContainer>
                    <Wrapper>
                        {hasNextPage ?
                            <Button onClick={() => fetchNextPage()}
                                    disabled={isFetchingNextPage}>
                                {isFetchingNextPage ? 'Loading more...' : 'Load More Reviews'}
                            </Button>
                            : <Typography.Title level={3}>There are no more reviews</Typography.Title>
                        }
                    </Wrapper>
                </>
            }
        </>
    );
};

export default ReviewsList;