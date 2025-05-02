import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {ToastContainer,Slide} from 'react-toastify'
import HeroSection from './component/HeroSection'
import ProductSection from './component/ProductSection'
import ProductDetails from './component/ProductDetails'
import CartList from './component/CartList'
import NotFound from './component/NotFound'

const App = () => {
  return (
    <BrowserRouter>
     <ToastContainer position='top-center' autoClose={600} hideProgressBar={true} transition={Slide}/>
      <Routes>
        <Route exact path='/' element={<HeroSection/>} />
        <Route exact path='/products' element={<ProductSection/>} />
        <Route exact path='/products/:id' element={<ProductDetails/>} />
        <Route exact path="/cart" element={<CartList/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App