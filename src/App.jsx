import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Products from './components/Products'
import BuyPage from './components/Buypage'
import Signup from './Auth/Signup'
import Signin from './Auth/Signin'


function App() {

  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path="/signin" element={<Signin />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path='/buyPage' element={<BuyPage />}/>
      </Routes>
    </>
  )
}

export default App
