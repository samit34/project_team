



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
import ProvProfile from '../Pages/providerDashboard/provProfile/ProvProfile';
import Dashboard from '../Pages/Dashboard';
// import '../css/style.css'

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
        <Route path="/" element={<Home />} />
        <Route path="/provider" element={<ProviderHome />} />
        <Route path="/dashboard" element={<Dashboard />} />


        {/* Provider Dashboard Routes */}
        <Route path="/providerDash" element={<ProviderDashboard />}>
          <Route index element={<Showjobs />} />
          <Route path="provprofile" element={<ProvProfile />} />
          <Route path="stackpage" element={<Stacks />} />

        </Route>

        {/* Consumer Dashboard Routes */}
        <Route path="/ConsumerDash" element={<ConsumerDashbord />}>
          <Route index element={<Jobpost />} />
          <Route path="stackpage" element={<Stacks />} />
        </Route>
      </Routes>
    </>
  );
};

export default Layout;
