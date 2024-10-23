import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { ImageModel } from "../../models";
import styled from "styled-components";
import 'swiper/scss'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/a11y'
import 'swiper/scss/scrollbar'


const CarouselContainer = styled.div`
    max-width: 100%;
    --swiper-theme-color: var(--main-color);
`;

const StyledImage = styled.img`
  width: 100%; 
  height: auto; 
    ob
`;

interface PostersProps {
  posters: ImageModel[]
}

const Posters = ({ posters }: PostersProps) => {
  return (
    <CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        loop={true}
        pagination={{ clickable: true }}
      >
        {posters.map(poster => (
          <SwiperSlide key={poster.id}>
            <StyledImage src={poster.url} alt="Poster" />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};

export default Posters;