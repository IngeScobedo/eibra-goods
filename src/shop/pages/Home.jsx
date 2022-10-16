import { Hero, ProductsCarousel, PromoCarousel } from '../components'

export const Home = () => {
  return (
    <div className='w-full h-screen bg-white snap-y snap-mandatory overflow-scroll'>
      <div className='snap-center'>
        <Hero />
      </div>
      <div className='w-full min-h-screen snap-start flex flex-col gap-5 md:gap-10'>
        <PromoCarousel />
        <ProductsCarousel />
      </div>
    </div>
  )
}
