import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { ImageModel } from "../../models";
import styled from "styled-components";


const CarouselContainer = styled.div`
  max-width: 400px; 
  width: 100%; 
`;

const StyledImage = styled.img`
  width: 100%; 
  height: auto; 
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
        navigation
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
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