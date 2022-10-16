import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BreadCrumb } from '../components/BreadCrumb'
import { Product, ProductCategory } from '../pages'

export const ProductRoutes = () => {
  return (
    <div className='relative pt-12'>
      <BreadCrumb />
      <Routes>
        <Route path='/producto/:product' element={<Product />} />
        <Route path='/productos/:category' element={<ProductCategory />} />
      </Routes>
    </div>
  )
}
