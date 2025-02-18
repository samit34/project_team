import React from 'react'


import Navbar from '../Components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'
import './Layout.css'

import Home from '../Pages/Home/Home'
import ProviderHome from '../Pages/providerHome/ProviderHome'



const Layout = () => {
  return (
    <>

    <Navbar className="navbar" />
    
   <Routes>
        <Route index element={<Home/>}/>
        <Route path='/provider' element={<ProviderHome/>}/>
        <Route path='/providerDash' element={<ProviderHome/>}/>
       
   </Routes>
    </>
  )
}

export default Layout