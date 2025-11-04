// src/components/HeroCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import swiper_1 from '/swiper_1.webp'
import swiper_2 from '/swiper_2.webp'
import swiper_3 from '/swiper_3.jpeg'
import swiper_4 from '/swiper_4.jpeg'
import swiper_5 from '/swiper_5.jpeg'
import swiper_6 from '/swiper_6.jpeg'
import swiper_7 from '/swiper_7.jpeg'
import swiper_8 from '/swiper_8.png'

import styles from './Swiper.module.css'

export default function HeroCarousel() { 
  return (
    <div className={styles.swiperContainer} >
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className={styles.mySwiper}
      >  
        <SwiperSlide><img src={swiper_1} alt="foto do slide"/></SwiperSlide> 
        <SwiperSlide><img src={swiper_2} alt="foto do slide" /></SwiperSlide>
        <SwiperSlide><img src={swiper_3} alt="foto do slide" /></SwiperSlide>
        <SwiperSlide><img src={swiper_4} alt="foto do slide" /></SwiperSlide>
        <SwiperSlide><img src={swiper_5} alt="foto do slide" /></SwiperSlide>
        <SwiperSlide><img src={swiper_6} alt="foto do slide" /></SwiperSlide>
        <SwiperSlide><img src={swiper_7} alt="foto do slide" /></SwiperSlide>
        <SwiperSlide><img src={swiper_8} alt="foto do slide" /></SwiperSlide>
       
      
      </Swiper>
    </div>
  )
}
