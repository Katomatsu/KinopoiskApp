
import {Button, Flex, Form, Typography} from 'antd';
import 'antd/dist/reset.css'
import FiltersItem from "./FiltersItem"

import styled from "styled-components";
import {useMoviesContext} from "../../context";
import {filtersOptions} from "../../constants";


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
    const {setType, setGenre, setStatus, setSearchTerm, searchTerm, type, status, genre} = useMoviesContext()
    const handleFilterChange = (value: string, filterName: 'genre' | 'type' | 'status') => {
        if (searchTerm) setSearchTerm('')
        if (filterName === 'genre') setGenre(value);
        else if (filterName === 'type') setType(value);
        else if (filterName === 'status') setStatus(value);
    }
    const handleReset = () => {
        form.resetFields();
        setGenre(null);
        setType(null);
        setStatus(null);
    };
    return (
        <Wrapper width={width} margin={margin} padding={padding}>
            <Typography.Title level={2}>Filters</Typography.Title>
            <Form form={form}>
                <Form.Item>
                    <FiltersItem
                        key={'Genre'}
                        options={filtersOptions.genres}
                        placeholder="Select Genre"
                        value={genre}
                        handleFilterChange={(value) => handleFilterChange(value, 'genre')}
                    />
                </Form.Item>
                <Form.Item>
                    <FiltersItem
                        key={'Type'}
                        options={filtersOptions.type}
                        placeholder="Select Type"
                        value={type}
                        handleFilterChange={(value) => handleFilterChange(value, 'type')}/>
                </Form.Item>
                <Form.Item>
                    <FiltersItem
                        key={'Status'}
                        options={filtersOptions.status}
                        placeholder="Select Status"
                        value={status}
                        handleFilterChange={(value) => handleFilterChange(value, 'status')}/>
                </Form.Item>
                <Form.Item>
                    <Flex vertical gap="small">
                        <Button htmlType={'reset'} onClick={handleReset}>Reset Filters</Button>
                    </Flex>
                </Form.Item>
            </Form>
        </Wrapper>
    );
};

export default Filters;