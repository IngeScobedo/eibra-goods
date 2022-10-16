import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, ShoppingCart } from '../pages'
import { NavBar } from '../ui'

export const ShopRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/carrito' element={<ShoppingCart />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}
