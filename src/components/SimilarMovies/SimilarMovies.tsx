

import React from 'react';
import {MovieModel} from "../../models";
import {A11y, Mousewheel, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import MovieItem from "../Movies/MovieItem";
import styled from "styled-components";
import {Typography} from "antd";

const breakPoints: { [key: number]: { [key: string]: number } } = {
  320: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  576: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 10
  },
  1024: {
  slidesPerView: 5,
    spaceBetween: 10
}

}

const Wrapper = styled.div`
    padding-bottom: 40px;
    text-align: center;
`

interface SimilarMoviesProps {
  similarMovies: MovieModel[];
}

const SimilarMovies = ({similarMovies}: SimilarMoviesProps) => {

  return (
    <Wrapper>
      <Typography.Title level={2}>Similar Movies</Typography.Title>
      {similarMovies ?
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Mousewheel]}
          breakpoints={breakPoints}
          mousewheel={similarMovies.length > 5}
          loop={true}
          pagination={{clickable: true}}
        >
          {similarMovies.map(movie => (
            <SwiperSlide key={movie.id}>
              <MovieItem item={movie}/>
            </SwiperSlide>
          ))}
        </Swiper>
        : <div>There is no data about similar movies</div>}
    </Wrapper>
  );
};

export default SimilarMovies;