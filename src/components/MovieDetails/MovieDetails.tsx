import React, {useState} from 'react';
import {ImagesResponseModel, MovieModel} from "../../models";
import {Button, Tabs, Typography} from 'antd';
import ReviewsList from "../Reviews/ReviewsList";
import {useFetchData} from "../../hooks";
import Persons from "../Persons/Persons";
import Posters from "../Posters/Posters";
import SeasonsInfo from "../SeasonsInfo/SeasonsInfo";
import styled from "styled-components";

interface MovieDetailsProps {
  item: MovieModel,
  movieId: string
}

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(30%, auto) minmax(60%, auto);
    gap: 20px;

    @media (min-width: 576px) {
        margin: 0 auto;
    }

    @media (max-width: 576px) {
        flex-direction: column;
        justify-content: center;
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
            left: 0px;
            right: 0px;
            height: 100%;
            bottom: 0px;
            background: linear-gradient(180deg, transparent 0%, white 105%);
            pointer-events: none;
        }
    }
`

const StyledButton = styled(Button)`
    display: block;
    margin: 10px auto 20px;
`

const MovieDetails = ({item, movieId}: MovieDetailsProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const {data, isLoading} = useFetchData<ImagesResponseModel>('https://api.kinopoisk.dev/v1.4/image', {
    movieId: movieId
  })


  return (
    <StyledWrapper>
      <LeftColumn>
        <img src={item.poster.url} alt="poster of the movie"/>
        <Typography.Title level={3}>Kinopoisk Rating: {item.rating.kp}</Typography.Title>
        <Typography.Title level={3} >IMDB Rating: {item.rating.imdb}</Typography.Title>
      </LeftColumn>
      <div>
        <Typography.Title>
          {item.name}
        </Typography.Title>
        <DescriptionContainer>
          <Typography.Text className={`movie__description ${!isExpanded ? 'hidden' : ''}`}>
            {item.description}
          </Typography.Text>
        </DescriptionContainer>
        <StyledButton
          onClick={() => setIsExpanded(prev => !prev)}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </StyledButton>

        <Persons persons={item.persons}/>

        <Tabs defaultActiveKey='1' type={'card'} items={[
          {
            label: 'Seasons Info',
            key: '1',
            children: <SeasonsInfo seasons={item.seasonsInfo}/>,
          },
          {
            label: 'Gallery',
            key: '2',
            children: !isLoading && <Posters posters={data.docs}/>,
          },
          {
            label: 'Reviews',
            key: '3',
            children: <ReviewsList movieId={movieId}/>,
          },
        ]}  />
      </div>
    </StyledWrapper>
  );
};

export default MovieDetails;
