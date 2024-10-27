import React from 'react';
import MovieItem from "./MovieItem";
import {Flex, List} from "antd";
import PageNavigator from "../PageNavigator/PageNavigator";
import {MoviesResponseModel} from "../../models";
import styled from "styled-components";

interface MovieListProps {
  movies: MoviesResponseModel;
  isLoading: boolean
}

const StyledList = styled.ul`
    display: grid;
    margin: 0;
    padding: 0;
    list-style-type: none;
    gap: 16px;
    grid-template-columns: repeat(5, 1fr);
    
    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
    
    @media (max-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 250px);
        padding: 10px;
        justify-content: center;
        gap: 40px;
    }
    
    @media (max-width: 576px) {
        grid-template-columns: 250px;
        padding: 0 30px;
    }
`

const MovieList = ({movies, isLoading}: MovieListProps) => {

  movies && console.log(Math.round(movies.total / movies.limit))
  return (
    <>
      <Flex vertical wrap gap='large'>
        <StyledList >
          {movies && movies.docs && movies.docs.map(item => (
            <MovieItem item={item} key={item.id}/>
          ))}
        </StyledList>

        {!isLoading && <PageNavigator totalPages={movies && movies.total}/>}
      </Flex>

    </>
  )
    ;
};

export default MovieList;