import React from 'react';
import Filters from "../Filters/Filters";
import MovieItem from "../Movies/MovieItem";
import {baseUrl} from "../../constants";
import {MovieModel} from "../../models";
import {useFetchData} from "../../hooks";
import MovieSkeleton from "../Movies/MovieSkeleton";
import styled from "styled-components";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {useMoviesContext} from "../../context";

const Container = styled.div`
    display: grid;
    grid-template-columns:  250px 300px;
    grid-template-areas: 
        "movie filters";
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

    const {
        data: movie,
        isLoading,
        isError,
        error
    } = useFetchData<MovieModel>(`${baseUrl}/movie/random`, params)
    return (
        <Container>
            <div className="movie">
                {isLoading && <MovieSkeleton/>}
                {!isLoading && !isError && <MovieItem item={movie} key={movie.id}/>}
                {!isLoading && isError && <ErrorMessage message={error.message}/>}
            </div>
            <div className="filters">
                <Filters/>
            </div>
        </Container>
    );
};

export default RandomMovie;