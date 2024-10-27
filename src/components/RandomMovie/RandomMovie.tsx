import React from 'react';
import Filters from "../Filters/Filters";
import MovieItem from "../Movies/MovieItem";
import {useMoviesContext} from "../../context";
import {MovieModel} from "../../models";
import {useFetchData} from "../../hooks";
import MovieSkeleton from "../Movies/MovieSkeleton";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns:  250px 300px;
    grid-template-areas: 
        "movie filters"
    ;
    justify-content: center;
    gap: 40px;

    @media (max-width: 768px) {
        grid-template-columns:  250px;
        grid-template-areas: 
        "filters"
        "movie" 
    ;
    }
    .filters {
        grid-area: filters;
    }
    .movie {
        grid-area: movie;
    }

`

const RandomMovie = () => {

  const {genre, status, type} = useMoviesContext();

  const params: Record<string, string | number> = {
    notNullFields: 'poster.url'
  };
  if (genre) params['genres.name'] = genre;
  if (status) params['status'] = status;
  if (type) params['type'] = type;

  const {data: movie, isLoading} = useFetchData<MovieModel>('https://api.kinopoisk.dev/v1.4/movie/random', params);

  return (
    <Container>
      <div className="movie">
        {!isLoading ? <MovieItem item={movie} key={movie.id}/> : <MovieSkeleton/>}
      </div>
      <div className="filters">
        <Filters />
      </div>
    </Container>
  );
};

export default RandomMovie;