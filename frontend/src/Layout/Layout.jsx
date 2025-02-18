import React from 'react'


import Navbar from '../Components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'
import './Layout.css'

import Home from '../Pages/Home/Home'
import ProviderHome from '../Pages/providerHome/ProviderHome'
// import Provider from '../Pages/providerHome/ProviderHome'
// import Consumer from '../Pages/consumer/Consumer'
const Layout = () => {
  return (
    <>

    <Navbar className="navbar" />
    
   <Routes>
        <Route index element={<Home/>}/>
        <Route path='/provider' element={<ProviderHome/>}/>
       
   </Routes>
    </>
  )
}

export default Layout