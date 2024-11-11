import React, {useState} from 'react';
import {Button, Flex, Form, Typography} from 'antd';
import 'antd/dist/reset.css'
import {FilterModel} from "../../models";
import FiltersItem from "./FiltersItem";


import {useMoviesContext} from "../../context";
import styled from "styled-components";

type filtersOptionsType = {
    genres: FilterModel[],
    type: FilterModel[],
    status: FilterModel[],
}

const filtersOptions: filtersOptionsType = {
    genres: [
        {value: 'биография'},
        {value: "боевик"},
        {value: "вестерн"},
        {value: "военный"},
        {value: "детектив"},
        {value: "детский"},
        {value: "для взрослых"},
        {value: "документальный"},
        {value: "драма"},
        {value: "игра"},
        {value: "история"},
        {value: "комедия"},
        {value: "концерт"},
        {value: "короткометражка"},
        {value: "криминал"},
        {value: "мелодрама"},
        {value: "музыка"},
        {value: "мультфильм"},
        {value: "мюзикл"},
        {value: "новости"},
        {value: "приключения"},
        {value: "реальное ТВ"},
        {value: "семейный"},
        {value: "спорт"},
        {value: "ток-шоу"},
        {value: "триллер"},
        {value: "ужасы"},
        {value: "фантастика"},
        {value: "фильм-нуар"},
        {value: "фэнтези"},
        {value: "церемония"}
    ],
    type: [
        {value: "animated-series"},
        {value: "cartoon"},
        {value: "anime"},
        {value: "tv-series"},
        {value: "movie"}
    ],
    status: [
        {value: "announced"},
        {value: "completed"},
        {value: "filming"},
        {value: "post-production"},
        {value: "pre-production"}
    ]
}

interface FiltersSidebarProps {
    // styles?: React.CSSProperties;
    width?: string;
    margin?: string;
    padding?: string;
}

const Wrapper = styled.div<{ width?: string, margin?: string, padding?: string }>`
    width: ${(props) => props.width || '100%'};
    margin: ${(props) => props.margin || '0'};
    padding: ${(props) => props.padding || '0'};
`

const Filters = ({width = '100%', margin = '0', padding = '0'}: FiltersSidebarProps) => {
    const [form] = Form.useForm();
    const [selectedGenre, setSelectedGenre] = useState<string>()
    const [selectedType, setSelectedType] = useState<string>()
    const [selectedStatus, setSelectedStatus] = useState<string>()
    const {setType, setGenre, setStatus, setSearchTerm} = useMoviesContext()
    const handleGenreChange = (value: string) => {
        console.log(`Genre: ${value}`)
        setSelectedGenre(value)
    }
    const handleTypeChange = (value: string) => {
        console.log(`Type: ${value}`)
        setSelectedType(value)
    }
    const handleStatusChange = (value: string) => {
        console.log(`Status: ${value}`)
        setSelectedStatus(value)
    }
    const handleReset = () => {
        form.resetFields();
        setSelectedGenre(null);
        setSelectedType(null);
        setSelectedStatus(null);
        setGenre(null);
        setType(null);
        setStatus(null);
    };

    const handleSubmit = () => {
        setSearchTerm('')
        if (selectedType) setType(selectedType)
        if (selectedGenre) setGenre(selectedGenre)
        if (selectedStatus) setStatus(selectedStatus)
        console.log("Filters submitted:", {selectedGenre, selectedType, selectedStatus});
    }

    return (
        <Wrapper width={width} margin={margin} padding={padding}>
            <Typography.Title level={2}>Filters</Typography.Title>
            <Form form={form} onFinish={handleSubmit}>
                    <Form.Item>
                        <FiltersItem
                            key={'Genre'}
                            options={filtersOptions.genres}
                            placeholder="Select Genre"
                            value={selectedGenre}
                            handleFilterChange={handleGenreChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <FiltersItem
                            key={'Type'}
                            options={filtersOptions.type}
                            placeholder="Select Type"
                            value={selectedType}
                            handleFilterChange={handleTypeChange}/>
                    </Form.Item>
                    <Form.Item>
                        <FiltersItem
                            key={'Status'}
                            options={filtersOptions.status}
                            placeholder="Select Status"
                            value={selectedStatus}
                            handleFilterChange={handleStatusChange}/>
                    </Form.Item>
                    <Form.Item>
                        <Flex vertical gap="small">
                            <Button type={'primary'} htmlType={'submit'}>Search With Filters</Button>
                            <Button htmlType={'reset'} onClick={handleReset}>Reset Filters</Button>
                        </Flex>
                    </Form.Item>
            </Form>
        </Wrapper>
    );
};

export default Filters;