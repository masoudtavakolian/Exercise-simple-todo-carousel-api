import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
/* import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation" */
import "swiper/swiper-bundle.min.css";
// import 'swiper/swiper.min.css'
import "./MySwiper.css";
import "../App.css"
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

let a=[];
  for(let i=0;i<10;i++){a.push( 
  <SwiperSlide>
    <div className="swiper-card">
      <div className="head-image">
        <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" />
      </div>
      <div className="details"></div>
    </div> 
  </SwiperSlide>)}
  

export default function MySwiper() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={false}
        slidesPerView={5}
        breakpoints= {{
          // when window width is >= 320px
          0: {
           slidesPerView: 1,
           spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
           slidesPerView: 2,
           spaceBetween: 30
          },
          // when window width is >= 640px
          601: {
           slidesPerView: 3,
           spaceBetween: 40
          },
          1100:{
            slidesPerView: 4,
           spaceBetween: 40
          },
          
         }}
        autoplay={{
          delay: 100000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-card">
            <div className="head-image">
              <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
            </div>
            <div className="details"></div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card">
            <div className="head-image">
              <img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" />
            </div>
            <div className="details"></div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card">
            <div className="head-image">
              <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" />
            </div>
            <div className="details"></div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card">
            <div className="head-image">
              <img src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" />
            </div>
            <div className="details"></div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card">
            <div className="head-image">
              <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" />
            </div>
            <div className="details"></div>
          </div> 
        </SwiperSlide>
        {
          
a
        }

        {/* https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg<SwiperSlide><div className="ffff">Hi</div></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
      </Swiper>
    </>
  );
}
