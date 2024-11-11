import React from 'react';
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const TypewriterWrapper = styled.div`
    font-size: 40px;
    font-family: 'Arial', sans-serif;
    font-weight: bold;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
    cursor: pointer;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`;

const TypeWriter = () => {
    return (
        <TypewriterWrapper>
            <StyledLink to={'/'}>
                <Typewriter
                    words={['KatoMovies']}
                    loop={3}
                    cursor
                    cursorStyle={'_'}
                    typeSpeed={150}
                    delaySpeed={1000}
                />
            </StyledLink>
        </TypewriterWrapper>
    );
};

export default TypeWriter;
