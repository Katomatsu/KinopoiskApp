import React, {useEffect, useState} from 'react';
import MovieList from "../components/Movies/MovieList";
import Filters from "../components/Filters/Filters";
import {Layout, Spin} from "antd";
import {MoviesResponseModel} from "../models";
import {baseUrl, notNullFields} from "../constants";
import {useMoviesContext} from "../context";
import {useFetchData} from "../hooks";
import styled from "styled-components";
import SearchBar from "../components/SearchBar/SearchBar";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const {Content, Sider} = Layout;


const StyledContent = styled(Content)`
    background-color: var(--main-color);
    display: flex;
    flex-direction: column;
`;

const StyledSider = styled(Sider)`
    background: var(--main-color) !important;
    padding-top: 10px;
    display: none;
    @media (min-width: 768px) {
        display: block;
    }
`;

const SearchBarWrapper = styled.div`
    flex: 1;
    max-width: 100%;
`;

const MainPage = () => {
    const {
        genre,
        status,
        type,
        setType,
        setGenre,
        setStatus,
        currPage,
        pageSize,
        searchTerm,
        setSearchTerm
    } = useMoviesContext();
    const [movies, setMovies] = useState<MoviesResponseModel>();

    const handleSearch = (searchString: string) => {
        setSearchTerm(searchString);
        setType(null)
        setGenre(null)
        setStatus(null)
    }

    let reqUrl: string = `${baseUrl}/movie?${notNullFields}`;

    const params: Record<string, string | number> = {
        page: currPage,
        limit: pageSize,
    };
    if (searchTerm) {
        params['query'] = searchTerm;
        reqUrl = `${baseUrl}/movie/search`;
    } else {
        if (genre) params['genres.name'] = genre;
        if (status) params['status'] = status;
        if (type) params['type'] = type;
    }

    const {
        data, isLoading, isError, error
    } = useFetchData<MoviesResponseModel>(reqUrl, params);

    useEffect(() => {
        if (data) {
            setMovies(data);
        }
    }, [data, searchTerm, genre, status, type]);


    return (
        <Layout>
            <StyledContent>
                <SearchBarWrapper>
                    <SearchBar onSearch={handleSearch}/>
                </SearchBarWrapper>
                {
                    isLoading && <Spin tip="Fetching movies from the server..." size={"large"}><div/></Spin>
                }
                {!isLoading && !isError && <MovieList movies={movies}/>}
                {!isLoading && isError && <ErrorMessage message={error.message}/>}
            </StyledContent>
            <StyledSider width={'20%'}>
                <Filters margin={'40px 0 0 0'} padding={'0 10px'}/>
            </StyledSider>
        </Layout>
    );
};

export default MainPage;