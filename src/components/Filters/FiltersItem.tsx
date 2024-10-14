import React from 'react';
import {AutoComplete} from "antd";
import {FilterModel} from "../../models";
import styled from "styled-components";


interface FiltersItemProps {
  options: FilterModel[],
  placeholder: string,
  filterOptions: (inputValue: string, options: { value: string }) => boolean
  handleFilterChange: (value: string) => void,
}

const StyledAutoComplete = styled(AutoComplete)`
    height: 50px;
    width: 100%;
`;

const FiltersItem = ({options, placeholder, filterOptions, handleFilterChange}: FiltersItemProps) => {
  return (
    <>
      <StyledAutoComplete
        options={options}
        placeholder={placeholder}
        filterOption={filterOptions}
        onChange={(value: string) => handleFilterChange(value)}

      />
    </>
  );
};

export default FiltersItem;