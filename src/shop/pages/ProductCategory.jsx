/* eslint-disable import/no-absolute-path */
import eibraImg from '/assets/images/eibra.jpg'
import { ProductList } from '../components'

export const ProductCategory = () => {
  return (
    <div className=''>
      <div className='w-full h-[220px]'>
        <img src={eibraImg} alt='Eibra Goods Photo' className='object-cover object-top md:object-center w-full h-full' />
      </div>
      <div className='py-6 px-2 flex flex-col items-center gap-2 text-center'>
        <h1 className='text-2xl'>Playeras</h1>
        <p className='line-clamp-1 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla inventore harum illo neque.</p>
      </div>
      <ProductList />
    </div>
  )
}
