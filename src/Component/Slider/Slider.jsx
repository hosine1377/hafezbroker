import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import slider1 from '../../../public/images/photo-13af9293f2ba98783ab1b85b82883f54.png'
import slider2 from '../../../public/images/photo-20f4de411cdd58e8f5c8470d7ab7260c.png'
import slider3 from '../../../public/images/photo-20f4de411cdd58e8f5c8470d7ab7260c.png'
import slider4 from '../../../public/images/photo-42b002ac33160deadc258d9a46432e6e.png'
import slider5 from '../../../public/images/photo-42b002ac33160deadc258d9a46432e6e.png'
import slider6 from '../../../public/images/photo-78a578a304368fb0270fab736aee7b8f.png'
import slider7 from '../../../public/images/photo-0241fe6a39443d835f121aaf6942a146.png'
import slider8 from '../../../public/images/photo-0241fe6a39443d835f121aaf6942a146.png'
import slider9 from '../../../public/images/photo-0241fe6a39443d835f121aaf6942a146.png'
import slider10 from '../../../public/images/photo-562a468f0aac14fba4fa891b764ab123.png'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './Slider.css'

// import required modules
import { Pagination } from 'swiper/modules'
import { Container } from 'react-bootstrap'

export default function Slider() {
  return (
    <section className="section-brand">
      <Container>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          // centeredSlides={true}

          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider10} alt="" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  )
}
