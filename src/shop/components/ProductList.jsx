import { popular } from '../data/popular'
import { ProductCard } from './ProductCard'

export const ProductList = () => {
  return (
    <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-1 px-2 pb-10'>
      {
        popular.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))
      }
    </div>
  )
}
