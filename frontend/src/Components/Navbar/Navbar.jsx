import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import './navbar.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Navbar = () => {

  const location = useLocation();
  
  // Check if user is in Consumer or Provider Dashboard
  const isProviderDashboard = location.pathname === '/providerDash';
  const isConsumerDashboard = location.pathname === '/ConsumerDash';
  const isProviderHome = location.pathname === '/provider';
  const isConsumerHome = location.pathname === '/';
  
  // Define dynamic routes for Home/Dashboard button
  let dashboardRoute = '/';
  if (isProviderDashboard) dashboardRoute = '/provider';
  else if (isConsumerDashboard) dashboardRoute = '/';
  else if (isProviderHome) dashboardRoute = '/providerDash';
  else if (isConsumerHome) dashboardRoute = '/ConsumerDash';
  
  // Define dynamic name for Home/Dashboard button
  const dashboardText = isProviderDashboard || isConsumerDashboard ? 'Home' : 'Dashboard';
  
  // Navigation links
  const navigation = [
    // Dynamic Home/Dashboard button
    { name: 'Home' , ref: '#' }, 
    { name: 'About us', href: '#' },
    { name: 'Contact', href: '#' },
    { name: dashboardText, href: dashboardRoute },
    
  ];
  

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (

 <div className='p'>

<div className='nav-contact w-full bg-black flex md:justify-between justify-center gap-y-3 md:flex-row flex-col  p-1 px-15'>
  <div className="nav-number text-white items-end justify-center">
    <p className='text-center'>91+ 8725978774</p>
  </div>
  <div className="nav-icons flex gap-5 items-end justify-center">
 <FaInstagram className='nav-icon text-white ' />
 <FaFacebookF className='nav-icon text-white ' />
 <FaXTwitter  className='nav-icon text-white ' />
 <FaYoutube   className='nav-icon text-white ' />
</div>

</div>

    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5"/>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="nav-heading text-4xl text-black font-bold">
             <h1>supher</h1>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 items-center ">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      'text-gray-800 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-2 py-2  font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="serach-input-div relative  ">
                <input type="text" placeholder='serach...' className='serach  hidden lg:block'  />
                <CiSearch className='serach-icon absolute m-0  top-[-1rem]  right-[-23px] lg:top-0 lg:right-0  lg:bg-black  bg-transparent color-black h-8.5 lg:text-white text-black w-8 px-1'   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                'text-gray-800 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </div>

  );
};

export default Navbar;


