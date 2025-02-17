import React from 'react'


import Navbar from '../Components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'
import './Layout.css'

import Home from '../Pages/Home/Home'
const Layout = () => {
  return (
    <>

    <Navbar className="navbar" />
    
   <Routes>
        <Route index element={<Home/>}/>
   </Routes>
    </>
  )
}

export default Layout