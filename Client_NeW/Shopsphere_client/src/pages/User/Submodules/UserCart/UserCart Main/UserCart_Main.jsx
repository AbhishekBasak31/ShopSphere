import React from 'react'
import Header from '../../../../../components/Global/Header/Header'
import { Outlet } from 'react-router-dom'

function UserCart_Main() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default UserCart_Main