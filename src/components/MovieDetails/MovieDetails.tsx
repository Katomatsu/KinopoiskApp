import React from 'react';
import {ImagesResponseModel, MovieModel} from "../../models";
import {Typography} from 'antd';
import ReviewsList from "../Reviews/ReviewsList";
import 'swiper/scss'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/a11y'
import 'swiper/scss/scrollbar'
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
    display: flex;
    gap: 20px;

    @media (min-width: 576px) {
        margin: 0 auto; 
    }
    
    @media (max-width: 576px) {
        flex-direction: column;
        justify-content: center;
    }
`;

const StyledImage = styled.div`
    flex: 0 0 40%;
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    
    @media (max-width: 576px) {
        flex: 0 0 100%;
        margin-bottom: 20px;
    }
`;

const StyledContent= styled.div`
    flex: 0 0 60%;
    max-width: 60%;
    @media (max-width: 576px) {
        flex: 0 0 100%;
        max-width: 100%;
    }
`

const {Title, Text, Paragraph} = Typography;

const MovieDetails = ({item, movieId}: MovieDetailsProps) => {
  const {data} = useFetchData<ImagesResponseModel>('https://api.kinopoisk.dev/v1.4/image', {
    movieId: movieId
  })


  return (
    <StyledWrapper>
      <StyledImage>
        <img src={item.poster.url} alt="poster of the movie"/>
      </StyledImage>
      <StyledContent>
        <Title>
          {item.name}
        </Title>
        <Text>
          {item.description}
        </Text>
        <Title level={2}>Kinopoisk Rating: {item.rating.kp}</Title>

        {data && data.docs && <Posters posters={data.docs}/>}
        <ReviewsList movieId={movieId}/>
        <Persons persons={item.persons}/>

        {item.isSeries && <SeasonsInfo seasons={item.seasonsInfo}/>}
      </StyledContent>
    </StyledWrapper>
  );
};

export default MovieDetails;
