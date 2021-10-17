import React, {  useRef,useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
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

export default function MySwiper() {
  const [data,setdata]=useState([]);
  let allJsxCardElement=[];
  if(data.length!==0){
       data.forEach(element => {
        allJsxCardElement.push( 
          <SwiperSlide>
            <div  className="swiper-card">
              <div className="head-image">
                <img alt="Product image" src={element.image+""} />
              </div>
              <div className="details">
                <div className="product-title">{element.title+""}</div>
                <div className="category">Category: {element.category+""}</div>
                <div className="price"><span>{element.price+" Tomans"}</span><span>{(element.price*(0.600)).toFixed(2)+" Tomans"}</span></div>
              </div>
            </div> 
          </SwiperSlide>)
     });
  }
  else{
    allJsxCardElement=[]
  }
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
        .then(response =>{console.log(response.data[0]);setdata(response.data)});
  }, [])
  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={false}
        slidesPerView={5}
        breakpoints= {{
          0: {
           slidesPerView: 1,
           spaceBetween: 20
          },
          800: {
           slidesPerView: 2,
           spaceBetween: 30
          },
          1010: {
           slidesPerView: 3,
           spaceBetween: 40
          },
          1300:{
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
        {
          data.length===0?<SwiperSlide><div>Loading...</div></SwiperSlide>:""
        }
        {
          allJsxCardElement
        }
      </Swiper>
    </>
  );
}
