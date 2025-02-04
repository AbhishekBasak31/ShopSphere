import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../../components/Global/Header/Header'
import Footer from '../../../components/Global/Footer/Fotter'

function ProductMain() {

   return (
    <div className='overflow-x-hidden'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default ProductMain