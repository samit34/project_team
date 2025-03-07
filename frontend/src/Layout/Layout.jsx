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



import HomeInOne from '../Pages/Home/home_innerPages/HomeInOne';
import InnerPageOne from '../Pages/Home/home_innerPages/innerpage/InnerPageOne';





  import Login from '../Pages/Login/Login';
  import Private from '../Auth/Private'
  import Signup from '../Pages/Signup/Signup';
import Chatuser from '../Pages/chatuser/Chatuser';

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
         
          <Route path='/loging' element={<Login />} />
          <Route path='/signupg' element={<Signup />} />
          <Route path="/" element={<Home />} />

          <Route path="/homeInone/:CategoryName" element={<HomeInOne />}>
            <Route path=':subcategory' element={<InnerPageOne />} />

          </Route>

          <Route path='/servscreen' element={<ServiceListScreen />} />
        
          {/* Provider Dashboard Routes */}
          <Route path='/provider' element={<ProviderHome />} />
          <Route path="/providerDash" element={<Private requiredRole="professional" > <ProviderDashboard /> </Private>}>
            {/* <Route index element={<Private requiredRole="professional" > <ProviderHome /> </Private>} /> */}
            <Route index element={<Private requiredRole="professional" > <Showjobs /> </Private>} />
            <Route path="myprofile" element={<Private requiredRole="professional" > <MyProfile />  </Private>} />
            <Route path="stackpage" element={<Private requiredRole="professional" > <Stacks />    </Private>} />
            <Route path="dashboard" element={<Private requiredRole="professional" > <Dashboard /> </Private>} />
            <Route path="task" element={<Private> <ProfilePopup /> </Private>} />
            <Route path="clender" element={<Private> <Clender /> </Private>} />
            <Route path="messages" element={<Private> <Chatuser/></Private>} />
            <Route path="chat/:id" element={<Private>  <Chat /></Private>} />
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
