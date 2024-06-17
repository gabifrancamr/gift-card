import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles';

import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';


import netflix from '../assets/images/BrandAssets_Logos_02-NSymbol.jpg'
import globoplay from '../assets/images/channels4_profile.jpg'
import minecraft from '../assets/images/minecraft.jpg'
import nintendo from '../assets/images/nintendo.png'
import spotify from '../assets/images/spotify.png'
import playstation from '../assets/images/playstation.png'
import HBO from '../assets/images/square social logo 400 x 400_0.avif'
import valorant from '../assets/images/valorant.png'
import xbox from '../assets/images/logox.jpg'
import lol from '../assets/images/lol.png'
import googleplay from '../assets/images/googlep.jpg'
import apple from '../assets/images/apple.jpg'
import uber from '../assets/images/uber.webp'
import ifood from '../assets/images/ifood.png'

function ProductSlider() {
  return (
    <div id='brands' className={`${styles.heading2} container`}>
      <h1 className="heading text-white font-poppins">Marcas</h1>
      <Swiper
         effect={'coverflow'}
         grabCursor={true}
         centeredSlides={true}
         loop={true}
         slidesPerView={'auto'}
         coverflowEffect={{
           rotate: 0,
           stretch: 0,
           depth: 100,
           modifier: 2.5,
         }}
         pagination={{ el: '.swiper-pagination', clickable: true }}
         navigation={{
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
           clickable: true,
         }}
         modules={[EffectCoverflow, Pagination, Navigation]}
         className="swiper_container"
      >
        
        <SwiperSlide>
          <div className='mb-30 text-center'>
            <img src={netflix} alt="netflix" />
            <h2 className='mt-10 text-5xl'>Netflix</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-30 text-center'>
            <img className="cursor-pointer" src={globoplay} alt="slide_image" />
            <h2 className='mt-10 text-5xl'>Globoplay</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-30 text-center'>
            <img className="cursor-pointer" src={minecraft} alt="slide_image" />
            <h2 className='mt-10 text-5xl'>Minecraft</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-30 text-center'>
            <img className="cursor-pointer" src={nintendo} alt="slide_image" />
            <h2 className='mt-10 text-5xl'>Nintendo</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-30 text-center'>
            <img className="cursor-pointer" src={spotify} alt="slide_image" />
            <h2 className='mt-10 text-5xl'>Spotify</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-30 text-center'>
            <img className="cursor-pointer" src={playstation} alt="slide_image" />
            <h2 className='mt-10 text-5xl'>Playstation</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-30 text-center'>
            <img className="cursor-pointer" src={HBO} alt="slide_image" />
            <h2 className='mt-10 text-5xl'>HBO Max</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-30 text-center'>
            <img className="cursor-pointer" src={valorant} alt="slide_image" />
            <h2 className='mt-10 text-5xl'>Valorant</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-30 text-center'>
            <img className="cursor-pointer" src={xbox} alt="slide_image" />
            <h2 className='mt-10 text-5xl'>XBox</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-30 text-center'>
            <img className="cursor-pointer" src={lol} alt="slide_image" />
            <h2 className='mt-10 text-5xl'>League Of Legends</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-30 text-center'>
            <img className="cursor-pointer" src={googleplay} alt="slide_image" />
            <h2 className='mt-10 text-5xl'>Google Play</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-30 text-center'>
            <img className="cursor-pointer" src={apple} alt="slide_image" />
            <h2 className='mt-10 text-5xl'>Apple</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-30 text-center'>
            <img className="cursor-pointer" src={ifood} alt="slide_image" />
            <h2 className='mt-10 text-5xl'>iFood</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mb-30 text-center'>
            <img className="cursor-pointer" src={uber} alt="slide_image" />
            <h2 className='mt-10 text-5xl'>Uber</h2>
          </div>
        </SwiperSlide>
        
        

        <div className="slider-controler mt-[8rem]">
          <div className="swiper-button-prev slider-arrow ml-[-13px] md:ml-[-37px]">
            <CircleChevronLeft color="blue" size={48} name="arrow-back-outline" />
            {/* <ion-icon ></ion-icon> */}
          </div>
          <div className="swiper-button-next slider-arrow ml-5 md:ml-[4rem]">
            <CircleChevronRight color="blue" size={48} name="arrow-forward-outline" />
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ProductSlider;
