import React from 'react';
import MovieDetails from "../components/MovieDetails/MovieDetails";
import {useParams} from "react-router-dom";
import {MovieModel} from "../models";
import {useFetchData} from "../hooks";

const MovieDetailsPage = () => {
  const {movieId} = useParams();

  const {data, isLoading} = useFetchData<MovieModel>(`https://api.kinopoisk.dev/v1.4/movie/${movieId}`)

  return (
    <>
      {data && !isLoading && <MovieDetails movieId={movieId} item={data}/>}
    </>
  );
};

export default MovieDetailsPage;