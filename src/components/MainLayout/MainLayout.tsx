import React from 'react';
import {Layout} from "antd";
import TypeWriter from "../TypeWriter/TypeWriter";
import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";

const {Header} = Layout

const StyledHeader = styled(Header)`
    background: var(--main-color);
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const ListItem = styled.li`
    margin: 0;
    padding: 10px 0;
    list-style-type: none;
    line-height: 20px;
`

const MainLayout = () => {
  return (
    <>

      <StyledHeader>
        <TypeWriter/>
        <div>
          <List>
            <ListItem>Sign In</ListItem>
            <ListItem>
              <Link to={'/movies/random'}>
                Random Movie
              </Link>
            </ListItem>
          </List>
        </div>
      </StyledHeader>
      <main>
        <Outlet/>
      </main>
    </>
  );
};

export default MainLayout;