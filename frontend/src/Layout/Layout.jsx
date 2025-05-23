import React, { useEffect, useState } from 'react';
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
import UserViewDetails from '../Pages/Home/home_innerPages/innerpage/innercom/UserViewDetails';
import BookingPage from '../Pages/Home/bookingPage/BookingPage';
import Consumer_clender from '../Pages/consumerDashboard/consumer-clender/Consumer_clender';
import Consumerdashboard from '../Pages/consumerDashboard/Consumer-stacks-dashboard/Consumer-dashboard';
import AllServiceDetail from '../Pages/jobs/jobs';



  const Layout = () => {

    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          // Scrolling down, hide navbar
          setShowNavbar(false);
        } else {
          // Scrolling up, show navbar
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);


    useEffect(() => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0 });
      document.documentElement.style.scrollBehavior = '';
    }, [location.pathname]);
    const hideNavbar = location.pathname.startsWith('/providerDash') || location.pathname.startsWith('/ConsumerDash');


    return (
      <>
        {!hideNavbar && <div
          style={{
            position: 'sticky',
            top: showNavbar ? '0' : '-145px', // Moves navbar up when scrolling down
            left: 0,
            width: '100%',
            zIndex: 1000,
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'top 0.3s ease-in-out', // Smooth transition effect
          }}
        >
          <Navbar />
        </div>}
        <Routes>
         
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/" element={ <Home />} />

          <Route path="/homeInone/:CategoryName" element={ <Private requiredRole="client"><HomeInOne /> </Private>}>
            <Route path=':subcategory' element={ <Private requiredRole="client" ><InnerPageOne /> </Private>} />
            
          </Route>
          <Route path='/booking' element={ <Private requiredRole="client"  ><BookingPage/> </Private>}/>
          <Route path='/userviewdet' element={<Private requiredRole="client"> <UserViewDetails/></Private> }/>

          <Route path='/servscreen' element={  <Private requiredRole="client"> <ServiceListScreen /></Private> } />
        
          {/* Provider Dashboard Routes */}   
          <Route path='/provider' element={<ProviderHome />} />
          <Route path ='/job/:id' element={ <Private  requiredRole="professional" > <AllServiceDetail/> </Private>}/>
          <Route path="/providerDash" element={<Private requiredRole="professional" > <ProviderDashboard /> </Private>}>
          <Route index element={<Private requiredRole="professional" > <Dashboard /> </Private>} />
          <Route path='dashboard' element={<Private requiredRole="professional" > <Dashboard /> </Private>} />
            {/* <Route index element={<Private requiredRole="professional" > <ProviderHome /> </Private>} /> */}
            <Route path="jobs" element={<Private requiredRole="professional" > <Showjobs /> </Private>} />
            <Route path="myprofile" element={<Private requiredRole="professional" > <MyProfile />  </Private>} />
            <Route path="stackpage" element={<Private requiredRole="professional" > <Stacks />    </Private>} />
            <Route index element={<Private requiredRole="professional" > <Dashboard /> </Private>} />
            <Route path="task" element={<Private requiredRole="professional" > <ProfilePopup /> </Private>} />
            <Route path="clender" element={<Private requiredRole="professional"> <Clender /> </Private>} />
            <Route path="messages" element={<Private requiredRole="professional"> <Chatuser/></Private>} />
            
          </Route>
          <Route path="chat/:id" element={<Private requiredRole="professional" >  <Chat /></Private>} />
          {/* Consumer Dashboard Routes */}
          <Route path="/ConsumerDash" element={ <Private requiredRole="client" > <ConsumerDashbord /> </Private>}>
            <Route index element={ <Private requiredRole="client" ><Jobpost /> </Private>} />
            <Route path="stackpage" element={ <Private requiredRole="client" ><Stacks /></Private>}/>
            <Route path="clender" element={ <Private requiredRole="client"><Consumer_clender/> </Private>}/>
            <Route path="jobpost" element={<Private requiredRole="client"><Jobpost /> </Private>} />
            <Route path="profile" element={ <Private requiredRole="client"><MyProfile /></Private>} />
            {/* <Route path="spendig" element={<Spending/>}/> */}
            {/* <Route path="dashboard" element={<Consumerdashboard/>}/> */}
            <Route path="Booking" element={<Private requiredRole="client"> <BookingPage/></Private>}/>
          
            <Route path="messagecon" element={ <Private requiredRole="client"><Chatuser/> </Private>} />
          </Route>
        </Routes>
      </>
    );
  };

  export default Layout;
