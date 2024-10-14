import React from 'react';
import MovieItem from "./MovieItem";
import {Flex, List} from "antd";
import PageNavigator from "../PageNavigator/PageNavigator";
import {MoviesResponseModel} from "../../models";

interface MovieListProps {
  movies: MoviesResponseModel;
  isLoading: boolean
}

const MovieList = ({movies, isLoading}: MovieListProps) => {

  movies && console.log(Math.round(movies.total / movies.limit))
  return (
    <>
      <Flex vertical wrap gap='large'>
        <List grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          xl: 4,
          xxl: 5
        }}
          loading={isLoading}
              dataSource={movies && movies.docs}
              renderItem={item => (
                  <MovieItem item={item} key={item.id}/>
              )}/>
        {!isLoading && <PageNavigator totalPages={movies && movies.total}/>}
      </Flex>

    </>
  );
};

export default MovieList;