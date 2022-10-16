import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// eslint-disable-next-line import/no-absolute-path
import imgUrl from '/assets/png/tokyologo.png'
import './promoCarousel.css'

export const PromoCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={imgUrl} alt='logo' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgUrl} alt='logo' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgUrl} alt='logo' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgUrl} alt='logo' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
