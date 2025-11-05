// src/components/HeroCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import swiper_1 from '/swiper_home/swiper_1.webp'
import swiper_2 from '/swiper_home/swiper_2.webp'
import swiper_3 from '/swiper_home/swiper_3.jpeg'
import swiper_4 from '/swiper_home/swiper_4.jpeg'
import swiper_5 from '/swiper_home/swiper_5.jpeg'
import swiper_6 from '/swiper_home/swiper_6.jpeg'
import swiper_7 from '/swiper_home/swiper_7.jpeg'
import swiper_8 from '/swiper_home/swiper_8.png'
import swiper_9 from '/swiper_home/swiper_9.jpeg'
import swiper_10 from '/swiper_home/swiper_10.jpeg'
import swiper_11 from '/swiper_home/swiper_11.jpeg'
import swiper_12 from '/swiper_home/swiper_12.jpeg'
import swiper_13 from '/swiper_home/swiper_13.jpeg'
import swiper_14 from '/swiper_home/swiper_14.jpeg'
import swiper_15 from '/swiper_home/swiper_15.jpeg'
import swiper_16 from '/swiper_home/swiper_16.jpeg'
import swiper_17 from '/swiper_home/swiper_17.jpeg'
import swiper_18 from '/swiper_home/swiper_18.jpeg'
import swiper_19 from '/swiper_home/swiper_19.jpeg'
import swiper_20 from '/swiper_home/swiper_20.jpeg'

import styles from './Swiper.module.css'

const swiper = [
  swiper_1,
  swiper_2,
  swiper_3,
  swiper_4,
  swiper_5,
  swiper_6,
  swiper_7,
  swiper_8,
  swiper_9,
  swiper_10,
  swiper_11,
  swiper_12,
  swiper_13,
  swiper_14,
  swiper_15,
  swiper_16,
  swiper_17,
  swiper_18,
  swiper_19,
  swiper_20
]


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
        {swiper.map((foto) =>  (
            <SwiperSlide key={foto}><img src={foto} alt="foto do slide"/></SwiperSlide> 
        )         
        )}      
      </Swiper>
    </div>
  )
}
