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
    <div className="banner">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={img1} alt="" className="img-fluid" />
          <div class="animated_text slider_text text-center">
            <h2>
              خرید رقابتی کالا در کارگزاری حافظ
              <div class="h4">سامانه آنلاین بورس کالا</div>
            </h2>
            <div class="row box-row m-0">
              <div class="col bg-warning box-col">
                <a href="#">سامانه بورس کالا</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <div class="animated_text slider_text text-center">
            <h2>
              خرید رقابتی کالا در کارگزاری حافظ
              <div class="h4">سامانه آنلاین بورس کالا</div>
            </h2>
            <div class="row box-row m-0">
              <div class="col bg-warning box-col">
                <a href="#">سامانه بورس کالا</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <div class="animated_text slider_text text-center">
            <h2>
              هم وزنِ معاملات
              <div class="h4">
                اعتبار، تخفیف کارمزد و صندوق‌های سرمایه‌گذاری
              </div>
            </h2>
            <div class="row box-row m-0">
              <div class="col bg-warning box-col">
                <a href="#">سامانه بورس کالا</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner
