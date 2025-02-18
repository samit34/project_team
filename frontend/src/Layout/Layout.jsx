import React from 'react'


import Navbar from '../Components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'
import './Layout.css'

import Home from '../Pages/Home/Home'
import ProviderHome from '../Pages/providerHome/ProviderHome'

import ProviderDashboard from '../Pages/providerDashboard/ProviderDashboard'
import ConsumerDashbord from '../Pages/consumerDashboard/ConsumerDashbord'
import Showjobs from '../Pages/providerDashboard/Showjobs/Showjobs'
import Stacks from '../Pages/providerDashboard/Stackpage/Stacks'



const Layout = () => {
  return (
    <>

    <Navbar className="navbar" />
    
   <Routes>
        <Route index element={<Home/>}/>
        <Route path='/provider' element={<ProviderHome/>}/>
        <Route path='/providerDash' element={<ProviderDashboard/>}>
        <Route index element={<Showjobs/>}/>
        <Route path='stackpage' element={<Stacks/>}/>
        </Route>
        <Route path='/ConsumerDash' element={<ConsumerDashbord/>}/>
       
   </Routes>
    </>
  )
}

export default Layout

