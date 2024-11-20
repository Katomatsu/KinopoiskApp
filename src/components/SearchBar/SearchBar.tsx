import React, { useState } from 'react';
import { Button, Input } from "antd";
import FiltersDropdown from "../Filters/FiltersDropdown/FiltersDropdown";

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