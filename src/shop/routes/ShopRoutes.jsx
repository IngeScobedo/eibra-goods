import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, ProductCategory, ShoppingCart } from '../pages'
import { NavBar } from '../ui'

export const ShopRoutes = () => {
  return (
    <div className='relative'>
      <NavBar />
      <Routes>
        <Route path='/carrito' element={<ShoppingCart />} />
        <Route path='/productos/:category' element={<ProductCategory />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}
