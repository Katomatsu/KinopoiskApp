
import React, {useState} from 'react';
import {ImagesResponseModel, MovieModel} from "../../models";
import {Button, Tabs, Typography} from 'antd';
import ReviewsList from "../Reviews/ReviewsList";
import {useFetchData} from "../../hooks";
import Persons from "../Persons/Persons";
import Posters from "../Posters/Posters";
import SeasonsInfo from "../SeasonsInfo/SeasonsInfo";
import styled from "styled-components";
import SimilarMovies from "../SimilarMovies/SimilarMovies";
import {baseUrl} from "../../constants";

interface MovieDetailsProps {
    item: MovieModel,
    movieId: string
}

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(30%, auto) minmax(60%, auto);
    gap: 20px;
    margin-bottom: 40px;

    @media (max-width: 576px) {
        justify-content: center;
        grid-template-columns: 100%;
    }
`;

const LeftColumn = styled.div`
    text-align: center;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    h3 {
        margin-top: 0 !important;
    }

    @media (max-width: 576px) {
        margin-bottom: 20px;
    }
`;

const DescriptionContainer = styled.div`
    position: relative;
    display: flex;

    .movie__description {
        max-height: 100%;
    }

    .hidden {
        overflow: hidden;
        max-height: 50px;

        &:after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            height: 100%;
            bottom: 0;
            background: linear-gradient(180deg, transparent 0%, white 105%);
            pointer-events: none;
        }
    }
`

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const StyledButton = styled(Button)`
    display: block;
    margin: 10px auto 20px;
`
const TabsWrapper = styled.div`
    width: 100%;
`

const MovieDetails = ({item, movieId}: MovieDetailsProps) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const {data, isLoading} = useFetchData<ImagesResponseModel>(`${baseUrl}/image`, {
        movieId: movieId
    })


    return (
        <>
            <StyledWrapper>
                <LeftColumn>
                    <img src={item.poster.url} alt="poster of the movie"/>
                    <Typography.Title level={3}>Kinopoisk Rating: {item.rating.kp}</Typography.Title>
                    <Typography.Title level={3}>IMDB Rating: {item.rating.imdb}</Typography.Title>
                </LeftColumn>
                <RightColumn>
                    <Typography.Title>
                        {item.name}
                    </Typography.Title>
                    {item.description ? <DescriptionContainer>
                        <Typography.Text className={`movie__description ${!isExpanded ? 'hidden' : ''}`}>
                            {item.description}
                        </Typography.Text>
                    </DescriptionContainer> : <div>There is data about description</div>}
                    <StyledButton
                        onClick={() => setIsExpanded(prev => !prev)}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </StyledButton>

                    <Persons persons={item.persons}/>

                    <TabsWrapper>
                        <Tabs defaultActiveKey='1' type={'card'} items={[
                            {
                                label: 'Seasons Info',
                                key: '1',
                                children: item.isSeries ? <SeasonsInfo seasons={item.seasonsInfo}/> : <div>This is not a series</div>,
                            },
                            {
                                label: 'Gallery',
                                key: '2',
                                children: !isLoading && data.docs.length > 0 ? <Posters posters={data.docs}/> : <div>There is no posters</div>,
                            },
                            {
                                label: 'Reviews',
                                key: '3',
                                children: <ReviewsList movieId={movieId}/>,
                            },
                        ]}/>
                    </TabsWrapper>

                </RightColumn>
            </StyledWrapper>
            <SimilarMovies similarMovies={item.similarMovies}/>
        </>
    );
};

export default MovieDetails;
