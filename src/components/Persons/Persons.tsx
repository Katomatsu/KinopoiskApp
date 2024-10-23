import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Mousewheel, Navigation, Pagination} from "swiper/modules";
import {Avatar, Flex, Typography} from "antd";
import {Person} from "../../models";
import styled from "styled-components";



const breakPoints: { [key: number]: { [key: string]: number } } = {
  320: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
  402: {
    slidesPerView: 5,
    spaceBetween: 10,

  },
  577: {
    slidesPerView: 5,
    spaceBetween: 10
  },
  800: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 5,
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  margin-bottom: 20px;
`;

const Img = styled.img`
    height: 210px;
`;

const StyledName = styled(Typography.Title)`
  text-align: center;
  font-size: 14px;
  margin: 0;
`;

const Persons = ({persons}: PersonsProps) => {
  return (
    <div >
      <StyledTitle level={2}>Актеры:</StyledTitle>
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
    </div>
  );
};

export default Persons;