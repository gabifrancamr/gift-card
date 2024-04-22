import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// import {ef} from 'swiper/bundle'

import slide_image_1 from '../assets/images/img_1.jpg';
import slide_image_2 from '../assets/images/img_2.jpg';
import slide_image_3 from '../assets/images/img_3.jpg';
import slide_image_4 from '../assets/images/img_4.jpg';
import slide_image_5 from '../assets/images/img_5.jpg';
import slide_image_6 from '../assets/images/img_6.jpg';
import slide_image_7 from '../assets/images/img_7.jpg';

function ProductSlider() {
  return (
    <div className="container">
      <h1 className="heading text-white font-poppins">Marcas</h1>
      <Swiper
         spaceBetween={50}
         slidesPerView={3}
         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}
        className="swiper_container"
      >
        <SwiperSlide>
          <img className="cursor-pointer" src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
