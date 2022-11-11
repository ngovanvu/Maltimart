import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routes/Routers'
import Carts  from '../UI/cart/Carts'
import { useSelector } from 'react-redux'

const Layout = () => {
  // ui-carts
  const showCart = useSelector(state =>state.cartUi.cartIsVisible)
  return (
    <div>
        <Header/>
        {
          showCart && <Carts/>
        }
        
        <div>
          <Routers/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout
