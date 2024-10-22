import React, {useEffect, useState} from 'react';
import MovieList from "../components/Movies/MovieList";
import Filters from "../components/Filters/Filters";
import {Layout} from "antd";
import {MoviesResponseModel} from "../models";
import {useMoviesContext} from "../context";
import {useFetchData} from "../hooks";
import styled from "styled-components";
import SearchBar from "../components/SearchBar/SearchBar";

const {Content, Sider} = Layout;


const StyledContent = styled(Content)`
    background-color: white;
    display: flex;
    flex-direction: column;
`;

const StyledSider = styled(Sider)`
    background: white !important;
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
  const {genre, status, type, currPage, pageSize} = useMoviesContext();
  const [movies, setMovies] = useState<MoviesResponseModel>();

  const params: Record<string, string | number> = {
    notNullFields: 'poster.url',
    page: currPage,
    limit: pageSize,
  };
  if (genre) params['genres.name'] = genre;
  if (status) params['status'] = status;
  if (type) params['type'] = type;

  const {data, isLoading} = useFetchData<MoviesResponseModel>('https://api.kinopoisk.dev/v1.4/movie', params);

  useEffect(() => {
    if (data) {
      setMovies(data);
    }
  }, [data]);

  return (
    <Layout>
      <StyledContent>
        <SearchBarWrapper>
          <SearchBar setMovies={setMovies}/>
        </SearchBarWrapper>
        <MovieList movies={movies} isLoading={isLoading}/>
      </StyledContent>
      <StyledSider width={'20%'}>
        <Filters margin={'40px 0 0 0'} padding={'0 10px'} />
      </StyledSider>
    </Layout>
  );
};

export default MainPage;


// <StyledHeader>
//         <FlexContainer>
//           <TypeWriter/>
//           <SearchBarWrapper>
//             <SearchBar setMovies={setMovies} />
//           </SearchBarWrapper>
//         </FlexContainer>
//       </StyledHeader>