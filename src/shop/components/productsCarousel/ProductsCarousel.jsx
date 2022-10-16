/* eslint-disable import/no-absolute-path */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import playera1 from '/assets/png/tokyoplayera1.png'
import playera2 from '/assets/png/tokyoplayera2.png'
import './productsCarousel.css'

export const ProductsCarousel = () => {
  return (
    <div className='products'>
      <Swiper
        spaceBetween={5}
        centeredSlides
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        slidesPerView={2}
        navigation
        modules={[Navigation]}
        initialSlide={1}
      >
        <SwiperSlide>
          <div className='w-full h-full flex flex-col'>
            <img src={playera1} alt='logo' />
            <h3 className='text-sm font-bold'>Playera Kyoto</h3>
            <h4 className='text-sm font-bold'>$650.00</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full flex flex-col'>
            <img src={playera2} alt='logo' />
            <h3 className='text-sm font-bold'>Playera Kyoto</h3>
            <h4 className='text-sm font-bold'>$650.00</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full flex flex-col'>
            <img src={playera1} alt='logo' />
            <h3 className='text-sm font-bold'>Playera Kyoto</h3>
            <h4 className='text-sm font-bold'>$650.00</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full flex flex-col'>
            <img src={playera2} alt='logo' />
            <h3 className='text-sm font-bold'>Playera Kyoto</h3>
            <h4 className='text-sm font-bold'>$650.00</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
