import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, ShoppingCart } from '../pages'
import { NavBar } from '../ui'
import { ProductRoutes } from './ProductRoutes'

export const ShopRoutes = () => {
  return (
    <div className='relative'>
      <NavBar />
      <Routes>
        <Route path='/carrito' element={<ShoppingCart />} />
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<ProductRoutes />} />
      </Routes>
    </div>
  )
}
