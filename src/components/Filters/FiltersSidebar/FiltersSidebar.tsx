import React, {useState} from 'react';
import {Button, Flex, Form} from 'antd';
import 'antd/dist/reset.css'
import {FilterModel} from "../../../models";
import FiltersItem from "../FiltersItem";


import {useMoviesContext} from "../../../context";

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
  styles?: React.CSSProperties;
}

const FiltersSidebar = ({styles}: FiltersSidebarProps) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('')
  const [selectedType, setSelectedType] = useState<string>('')
  const [selectedStatus, setSelectedStatus] = useState<string>('')
  const {setType, setGenre, setStatus} = useMoviesContext()
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

  const filterOptions: (inputValue: string, options: { value: string }) => boolean = (inputValue, option) => {
    return option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
  }

  const handleSubmit = () => {
    if (selectedType) setType(selectedType)
    if (selectedGenre) setGenre(selectedGenre)
    if (selectedStatus) setStatus(selectedStatus)
    console.log("Filters submitted:", { selectedGenre, selectedType, selectedStatus });
  }

  return (
    <Form style={styles} onFinish={handleSubmit}>
      <Flex vertical gap="large" >
        <FiltersItem
          key={'Genre'}
          options={filtersOptions.genres}
          placeholder="Select Genre"
          filterOptions={filterOptions}
          handleFilterChange={handleGenreChange}
        />
        <FiltersItem
          key={'Type'}
          options={filtersOptions.type}
          placeholder="Select Type"
          filterOptions={filterOptions}
          handleFilterChange={handleTypeChange}/>
        <FiltersItem
          key={'Status'}
          options={filtersOptions.status}
          placeholder="Select Status"
          filterOptions={filterOptions}
          handleFilterChange={handleStatusChange}/>
        <Button type={'primary'} htmlType={'submit'}>Search With Filters</Button>
      </Flex>
    </Form>
  );
};

export default FiltersSidebar;