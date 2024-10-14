import React, { useState } from 'react';
import { Button, Input } from "antd";
import FiltersDropdown from "../Filters/FiltersDropdown/FiltersDropdown";
import { MoviesResponseModel } from "../../models";
import { useMoviesContext } from "../../context";
import { useFetchData } from "../../hooks";
import styled from "styled-components";

const { Search } = Input;


const SearchWrapper = styled.div`
  display: flex; 
  gap: 20px; 
  align-items: center; 
  width: 100%; 
`;

const StyledSearch = styled(Search)`
  flex: 1; 
`;

const StyledButton = styled(Button)`
    display: block;
    @media (min-width: 768px) {
        display: none;
    }
`;

interface SearchBarProps {
  setMovies: (movies: MoviesResponseModel) => void
}

const SearchBar = ({ setMovies }: SearchBarProps) => {
  const { searchTerm, setSearchTerm } = useMoviesContext();
  const [opened, setOpened] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const { data, refetch } = useFetchData<MoviesResponseModel>('https://api.kinopoisk.dev/v1.4/movie/search', {
    notNullFields: 'poster.url',
    query: searchTerm,
    page: 1,
    limit: 100,
  });

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      await refetch();
      if (data) {
        setMovies(data);
      }
      setSearchTerm('');
    }
  };

  return (
    <SearchWrapper>
      <StyledSearch
        value={searchTerm}
        onChange={handleInputChange}
        onSearch={handleSearch}
        enterButton='search'
        size='large'
        placeholder='search for a movie...'
      />
      <StyledButton type="primary" onClick={() => setOpened(true)}>
        Filters
      </StyledButton>
      <FiltersDropdown onClose={() => setOpened(false)} isOpened={opened} />
    </SearchWrapper>
  );
};

export default SearchBar;