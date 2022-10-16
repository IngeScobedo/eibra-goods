import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// eslint-disable-next-line import/no-absolute-path
import imgUrl from '/assets/png/tokyoplayera1.png'
import './galleryCarousel.css'

export const GalleryCarousel = () => {
  return (
    <div className='gallery'>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <img className='w-full h-full object-cover' src={imgUrl} alt='logo' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <img className='w-full h-full object-cover' src={imgUrl} alt='logo' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <img className='w-full h-full object-cover' src={imgUrl} alt='logo' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <img className='w-full h-full object-cover' src={imgUrl} alt='logo' />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
