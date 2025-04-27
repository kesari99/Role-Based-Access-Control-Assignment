import React from 'react'
import { Outlet } from 'react-router-dom'
import CommonHeader from './header'

const UserViewCommonLayout = () => {
  return (
    <div>

      <CommonHeader />

      <Outlet />


    </div>
  )
}

export default UserViewCommonLayout