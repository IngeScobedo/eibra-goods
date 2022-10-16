
export const ProductCard = ({ name, price, url }) => {
  return (
    <div className='w-full flex flex-col'>
      <img src={url} alt='logo' />
      <div className='product-info'>
        <h3 className='text-sm font-bold'>{name}</h3>
        <h4 className='text-sm font-bold'>${price}</h4>
      </div>
    </div>
  )
}
