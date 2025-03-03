



import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';


import Navbar from '../Components/Navbar/Navbar';
import Home from '../Pages/Home/Home';
import ProviderHome from '../Pages/providerHome/ProviderHome';
import ProviderDashboard from '../Pages/providerDashboard/ProviderDashboard';
import ConsumerDashbord from '../Pages/consumerDashboard/ConsumerDashbord';
import Showjobs from '../Pages/providerDashboard/Showjobs/Showjobs';
import Stacks from '../Pages/providerDashboard/Stackpage/Stacks';
import Jobpost from '../Pages/consumerDashboard/jobpost/Jobpost';

import MyProfile from '../Pages/providerDashboard/myProfile/MyProfile';
import Dashboard from '../Pages/providerDashboard/dashboard/Dashboard';

import ProfilePopup from '../Pages/providerDashboard/myProfile/profile_comp/ProfilePopup';

import Clender from '../Pages/providerDashboard/dashboard/Clender/Clender';

import ServiceListScreen from '../Pages/serviceListScreen/ServiceListScreen';

import Chat from '../Components/chat/Chat';
import Login from '../Pages/Login/Login';
import Private from '../Auth/Private'
import Signup  from '../Pages/Signup/Signup';

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0 });
    document.documentElement.style.scrollBehavior = '';
  }, [location.pathname]);
  const hideNavbar = location.pathname.startsWith('/providerDash') || location.pathname.startsWith('/ConsumerDash');
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
      <Route path='/loging' element={<Login/>} />
      <Route path='/signupg' element={<Signup/>}/>
        <Route path="/home" element={<Home />} />
    
        <Route path='/servscreen' element={<ServiceListScreen/>}/>
         <Route path='/chat' element={<Chat/>} />
        {/* Provider Dashboard Routes */}
        <Route  path='/provider'  element={  <ProviderHome /> } /> 
        <Route path="/providerDash" element={<Private requiredRole="professional" > <ProviderDashboard/> </Private> }>
          <Route  index  element={ <Private requiredRole="professional" > <ProviderHome /> </Private> } /> 
          <Route path='showjobs'  element={   <Private requiredRole="professional" > <Showjobs /> </Private> } />
          <Route path="myprofile" element={  <Private requiredRole="professional" > <MyProfile/>  </Private> } />
          <Route path="stackpage" element={  <Private requiredRole="professional" > <Stacks />    </Private> } />
          <Route path="dashboard" element={  <Private requiredRole="professional" > <Dashboard /> </Private> } />
          <Route path="task" element={ <Private> <ProfilePopup/> </Private> } />
          <Route path="clender" element={ <Private> <Clender/> </Private>} />
        </Route>
        {/* Consumer Dashboard Routes */}
        <Route path="/ConsumerDash" element={<ConsumerDashbord />}>
          <Route index element={<Jobpost />} />
          <Route path="stackpage" element={<Stacks />}/>
        </Route>
      </Routes>
    </>
  );
};

export default Layout;
