import React from 'react';
import {Select} from "antd";
import {FilterModel} from "../../models";
import styled from "styled-components";


interface FiltersItemProps {
  options: FilterModel[],
  placeholder: string,
  filterOptions: (inputValue: string, options: { value: string }) => boolean
  handleFilterChange: (value: string) => void,
}

const StyledAutoSelect = styled(Select)`
    height: 50px;
    width: 100%;
`;

const FiltersItem = ({options, placeholder, filterOptions, handleFilterChange}: FiltersItemProps) => {
  return (
    <>
      <StyledAutoSelect
        options={options}
        placeholder={placeholder}
        filterOption={filterOptions}
        onChange={(value: string) => handleFilterChange(value)}

      />
    </>
  );
};

export default FiltersItem;