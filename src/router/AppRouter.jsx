import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ShopRoutes } from '../shop/routes/ShopRoutes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/login' element={<AuthRoutes />} /> */}
        <Route path='/*' element={<ShopRoutes />} />
      </Routes>
    </>
  )
}
