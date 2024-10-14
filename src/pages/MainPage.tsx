import React, { useEffect, useState } from 'react';
import MovieList from "../components/Movies/MovieList";
import SearchBar from "../components/SearchBar/SearchBar";
import FiltersSidebar from "../components/Filters/FiltersSidebar/FiltersSidebar";
import { Layout } from "antd";
import { MoviesResponseModel } from "../models";
import { useMoviesContext } from "../context";
import { Typewriter } from "react-simple-typewriter";
import { useFetchData } from "../hooks";
import styled from "styled-components";

const { Header, Content, Sider } = Layout;

const StyledHeader = styled(Header)`
  background: white;
  padding: 0;
`;

const TypewriterWrapper = styled.div`
  font-size: 40px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
`;

const StyledContent = styled(Content)`
  background-color: white;
`;

const StyledSider = styled(Sider)`
  background: white !important;
  padding-top: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
`;

const SearchBarWrapper = styled.div`
  flex: 1;
  max-width: 600px;
`;

const MainPage = () => {
  const { genre, status, type, currPage, pageSize } = useMoviesContext();
  const [movies, setMovies] = useState<MoviesResponseModel>();

  const params: Record<string, string | number> = {
    notNullFields: 'poster.url',
    page: currPage,
    limit: pageSize,
  };
  if (genre) params['genres.name'] = genre;
  if (status) params['status'] = status;
  if (type) params['type'] = type;

  const { data, isLoading } = useFetchData<MoviesResponseModel>('https://api.kinopoisk.dev/v1.4/movie', params);

  useEffect(() => {
    if (data) {
      setMovies(data);
    }
  }, [data]);

  return (
    <Layout>
      <StyledHeader>
        <FlexContainer>
          <TypewriterWrapper>
            <Typewriter
              words={['KatoMovies']}
              loop={3}
              cursor
              cursorStyle={'_'}
              typeSpeed={150}
              delaySpeed={1000}
            />
          </TypewriterWrapper>
          <SearchBarWrapper>
            <SearchBar setMovies={setMovies} />
          </SearchBarWrapper>
        </FlexContainer>
      </StyledHeader>
      <Layout>
        <StyledContent>
          <MovieList movies={movies} isLoading={isLoading} />
        </StyledContent>
        <StyledSider width={'20%'} >
          <FiltersSidebar />
        </StyledSider>
      </Layout>
    </Layout>
  );
};

export default MainPage;
