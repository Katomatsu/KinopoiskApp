import React from 'react';
import {Select} from "antd";
import {FilterModel} from "../../models";
import styled from "styled-components";


interface FiltersItemProps {
    options: FilterModel[],
    placeholder: string,
    value: string
    handleFilterChange: (value: string) => void,
}

const StyledSelect = styled(Select)`
    height: 50px;
    width: 100%;
`;

const FiltersItem = ({options, placeholder, handleFilterChange, value
}: FiltersItemProps) => {
    return (
        <StyledSelect
            options={options}
            placeholder={placeholder}
            onChange={(value: string) => handleFilterChange(value)}
            value={value}
        />
    );
};

export default FiltersItem;