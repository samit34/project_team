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
import Jobpost from '../Pages/consumerDashboard/jobpost/Jobpost'
import ProvProfile from '../Pages/providerDashboard/provProfile/ProvProfile'




const Layout = () => {

  const hideNavbar = location.pathname.startsWith('/providerDash') || location.pathname.startsWith('/ConsumerDash');

  return (
    <>

{ !hideNavbar && <Navbar className="navbar" /> }
    
   <Routes>
        <Route index element={<Home/>}/>
        <Route path='/provider' element={<ProviderHome/>}/>
        <Route path='/providerDash' element={<ProviderDashboard/>}>
        <Route index element={<Showjobs/>}/>
        <Route path='provprofile' element={<ProvProfile/>}/>
        <Route path='stackpage' element={<Stacks/>}/>
        </Route>
        <Route path='/ConsumerDash' element={<ConsumerDashbord/>}>
        <Route index element={<Jobpost/>}/>
        <Route path='stackpage' element={<Stacks/>}/>
        </Route>
   </Routes>
    </>
  )
}

export default Layout

