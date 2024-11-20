import React from 'react';
import MovieDetails from "../components/MovieDetails/MovieDetails";
import {useParams} from "react-router-dom";
import {MovieModel} from "../models";
import {useFetchData} from "../hooks";
import {Spin} from "antd";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import {baseUrl} from "../constants";

const MovieDetailsPage = () => {
    const {movieId} = useParams();

    const {
        data,
        isLoading,
        isError,
        error
    } = useFetchData<MovieModel>(`${baseUrl}/movie/${movieId}`)
    if (isError) {
        return <ErrorMessage message={error.message}/>
    }

    return (
        <>

            {isLoading
                ? <Spin tip="Fetching movie details from the server..." size={"large"}>
                    <div/>
                </Spin>
                : <MovieDetails movieId={movieId} item={data}/>}
        </>
    );
};

export default MovieDetailsPage;