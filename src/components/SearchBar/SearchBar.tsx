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
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
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
  onSearch: (searchString: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [input, setInput] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  // const { data, refetch } = useFetchData<MoviesResponseModel>('https://api.kinopoisk.dev/v1.4/movie/search', {
  //   query: searchTerm,
  //   page: 1,
  //   limit: 100,
  // });

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
    }
    setInput('')
  };

  return (
    <SearchWrapper>
      <StyledSearch
        value={input}
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