import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Mousewheel, Navigation, Pagination} from "swiper/modules";
import {Avatar, Flex, Typography} from "antd";
import {Person} from "../../models";
import styled from "styled-components";



const breakPoints: { [key: number]: { [key: string]: number } } = {
  320: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 10
  }
}
interface PersonsProps {
  persons: Person[]
}
const StyledTitle = styled(Typography.Title)`
  text-align: center;
  margin-bottom: 20px;
`;

const SlideWrapper = styled.div`
    display: block;
    width: 150px;
    margin: 0 auto 20px;    
`;

const Img = styled.img`
    height: 230px;
    width: 100%;
`;

export const SwiperWrapper = styled.div`
    width: 100%;
`

const StyledName = styled(Typography.Title)`
  text-align: center;
  font-size: 14px;
  margin: 0;
`;

const Persons = ({persons}: PersonsProps) => {
  return (
    < >
      <StyledTitle level={2}>Актеры:</StyledTitle>
      <SwiperWrapper>
        <Swiper modules={[Mousewheel]}
                breakpoints={breakPoints}
                mousewheel={true}
                loop={true}>
          {persons.map(person =>
            <SwiperSlide key={person.id}>
              <SlideWrapper >
                <Img src={person.photo} alt={person.name || 'no information'}/>
                <StyledName level={5}>{person.name || 'no information'}</StyledName>
              </SlideWrapper>
            </SwiperSlide>
          )}
        </Swiper>
      </SwiperWrapper>
    </>
  );
};

export default Persons;