import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import ShopDetails from '../pages/ShopDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element = {<Navigate to="/home" />}/>
      <Route path="/home" element = {<Home/>}/>
      <Route path="/shop" element = {<Shop/>}/>
      <Route path="/shop/:id" element = {<ShopDetails/>}/>
      <Route path="/cart" element = {<Cart/>}/>
      <Route path="/checkout" element = {<Checkout/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/signup" element = {<Register/>}/>
    </Routes>
  )
}

export default Routers
