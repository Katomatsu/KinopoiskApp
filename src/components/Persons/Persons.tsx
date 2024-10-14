import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination} from "swiper/modules";
import {Avatar, Flex, Typography} from "antd";
import {Person} from "../../models";
import styled from "styled-components";

interface PersonsProps {
  persons: Person[]
}

const breakPoints: { [key: number]: { [key: string]: number } } = {
  320: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  402: {
    slidesPerView: 3,
    spaceBetween: 10,

  },
  577: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  800: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20
  }
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

const StyledAvatar = styled(Avatar)`
  margin-bottom: 10px;
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
      <Swiper modules={[Navigation, Pagination, A11y]}
              spaceBetween={10}
              loop={true}
              breakpoints={breakPoints}>
        {persons.map(person =>
          <SwiperSlide key={person.id}>
            <SlideWrapper >
              <StyledAvatar size={64} shape={'square'} src={person.photo}/>
              <StyledName level={5}>{person.name || 'no information'}</StyledName>
            </SlideWrapper>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default Persons;