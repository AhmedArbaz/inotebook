import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      {/* ya outlet aisi liay use kia kay navbar sab may ay but aus kay bad sab change hotay jain  */}
      <Outlet/> 


    </div>
  )
}

export default Layout
