import { GalleryCarousel } from '../components'

export const Product = () => {
  return (
    <div className='w-full flex flex-col'>
      <GalleryCarousel />
      <div className='w-full flex flex-col px-4 py-2 space-y-5'>
        <div className='product-options'>
          <h1 className='text-sm font-bold'>Playera Kyoto Shidori</h1>
          <h1 className='text-sm font-bold'>$650</h1>
        </div>
        <div className='product-options'>
          <h1 className='text-sm font-normal'>Color</h1>
          <div className='flex flex-wrap gap-2'>
            <div className='w-[50px] h-[68px] border-[0.1px] border-gray-300 p-[2px]'>
              <img className='w-full h-full object-cover' src='/assets/png/tokyoplayera1.png' alt='playera' />
            </div>
            <div className='w-[50px] h-[68px] border-[0.1px] border-gray-300 p-[2px]'>
              <img className='w-full h-full object-cover' src='/assets/png/tokyoplayera1.png' alt='playera' />
            </div>
          </div>
        </div>
        <div className='product-options'>
          <h1 className='text-sm font-normal'>Talla</h1>
          <div className='flex flex-wrap gap-2'>
            <div className='w-[50px] h-[50px] border-[0.1px] border-gray-300 p-[2px] rounded-full flex justify-center items-center'>
              <span className='text-[18px] font-bold'>XS</span>
            </div>
            <div className='w-[50px] h-[50px] border-[0.1px] border-gray-300 p-[2px] rounded-full flex justify-center items-center'>
              <span className='text-[18px] font-bold'>S</span>
            </div>
            <div className='w-[50px] h-[50px] border-[0.1px] border-gray-300 p-[2px] rounded-full flex justify-center items-center'>
              <span className='text-[18px] font-bold'>M</span>
            </div>
            <div className='w-[50px] h-[50px] border-[0.1px] border-gray-300 p-[2px] rounded-full flex justify-center items-center'>
              <span className='text-[18px] font-bold'>L</span>
            </div>
            <div className='w-[50px] h-[50px] border-[0.1px] border-gray-300 p-[2px] rounded-full flex justify-center items-center'>
              <span className='text-[18px] font-bold'>XL</span>
            </div>
          </div>
        </div>
        <div className='product-options'>
          <button className='w-full border border-black py-[11.5px] px-2'>
            AGREGAR A LISTA DE DESEOS
          </button>
        </div>
      </div>
    </div>
  )
}
