import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import img1 from '../../../public/images/slider-photo-86419954a3817185599c5f3abebcb49c.jpeg'
import img2 from '../../../public/images/slider-photo-4315a4c68375d8b3d02217e3c8222073.jpeg'
import img3 from '../../../public/images/slider-photo-829ffd0a6aaa43d8f6a685d00aa0d683.jpeg'
// import required modules
import { Navigation } from 'swiper/modules'
import './Banner.css'
function Banner() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner
