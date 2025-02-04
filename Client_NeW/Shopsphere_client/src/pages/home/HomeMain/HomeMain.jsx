import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../../../components/Global/Header/Header.jsx';
import Footer from '../../../components/Global/Footer/Fotter.jsx';
function HomeMain() {
  return (
    <div className='overflow-x-hidden'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
    

  )
}

export default HomeMain