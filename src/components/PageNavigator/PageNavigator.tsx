import { Pagination } from "antd";
import React from "react";
import styled from "styled-components";
import {useMoviesContext} from "../../context";

interface PageNavigatorProps {
  totalPages: number;
}

const PaginationWrapper = styled.div`
    margin: 0 auto 20px;
`;

const PageNavigator = ({ totalPages }: PageNavigatorProps) => {
  const { currPage, pageSize, setCurrPage, setPageSize } = useMoviesContext();

  const handlePageChange = (curr: number, size: number) => {
    setCurrPage(curr);
    setPageSize(size);
  };

  return (
    <PaginationWrapper>
      <Pagination
        pageSizeOptions={[1, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200]}
        defaultCurrent={1}
        current={currPage}
        pageSize={pageSize}
        total={totalPages}
        onChange={handlePageChange}
      />
    </PaginationWrapper>
  );
};

export default PageNavigator;