/* eslint-disable import/no-absolute-path */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowUpAZ } from '@fortawesome/free-solid-svg-icons'

import eibraImg from '/assets/images/eibra.jpg'
import { ProductList } from '../components'

export const ProductCategory = () => {
  return (
    <div className='pt-12'>
      <div className='w-full h-12 flex items-center justify-between px-4 md:px-10 border-y border-y-gray-400 font-bold'>
        <div className='flex gap-4 items-center'>
          <FontAwesomeIcon icon={faArrowLeft} />
          <h1>INICIO</h1>
        </div>
        <FontAwesomeIcon icon={faArrowUpAZ} />
      </div>
      <div className='w-full h-12 flex items-center justify-end px-4 md:px-10 gap-4 text-gray-500'>
        <h1>8 Productos</h1>
      </div>
      <div className='w-full h-[220px]'>
        <img src={eibraImg} alt='Eibra Goods Photo' className='object-cover object-top w-full h-full' />
      </div>
      <div className='py-6 px-2 flex flex-col items-center gap-2 text-center'>
        <h1 className='text-2xl'>Playeras</h1>
        <p className='line-clamp-2 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla inventore harum illo neque.</p>
      </div>
      <ProductList />
    </div>
  )
}
