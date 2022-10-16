import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './productsCarousel.css'
import { popular } from '../../data/popular'

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
        loop
        slidesPerView={2}
        navigation
        modules={[Navigation]}
        initialSlide={1}
      >
        {
          popular.map((product, index) => (
            <SwiperSlide key={index}>
              <div className='w-full h-full flex flex-col'>
                <img src={product.url} alt='logo' />
                <div className='product-info'>
                  <h3 className='text-sm font-bold'>{product.name}</h3>
                  <h4 className='text-sm font-bold'>${product.price}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
