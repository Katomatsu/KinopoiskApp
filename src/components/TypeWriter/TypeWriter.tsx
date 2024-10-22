import React from 'react';
import styled from "styled-components";
import {Typewriter} from "react-simple-typewriter";


const TypewriterWrapper = styled.div`
  font-size: 40px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
`;

const TypeWriter = () => {
  return (

  <TypewriterWrapper>
    <Typewriter
      words={['KatoMovies']}
      loop={3}
      cursor
      cursorStyle={'_'}
      typeSpeed={150}
      delaySpeed={1000}
    />
  </TypewriterWrapper>
  );
};

export default TypeWriter;