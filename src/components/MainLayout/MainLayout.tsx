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
    height: 100px;
`;


const MainLayout = () => {
    return (
        <>

            <StyledHeader>
                <TypeWriter/>
                <div>
                    <Link to={'/random'}>
                        Random Movie
                    </Link>
                </div>
            </StyledHeader>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default MainLayout;