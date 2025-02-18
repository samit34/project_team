import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';

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
    { name: dashboardText, href: dashboardRoute }, // Dynamic Home/Dashboard button
    { name: 'Team', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Calendar', href: '#' },
  ];
  

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="nav-heading text-2xl font-bold">
             <h1>supher</h1>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      'text-gray-800 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-xl font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
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
  );
};

export default Navbar;


// additional
// import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import { useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const location = useLocation();

//   // Check if user is on Provider or Consumer Dashboard
//   const isProviderDashboard = location.pathname === '/providerDash';
//   const isConsumerDashboard = location.pathname === '/ConsumerDash';
//   const isHome = location.pathname === '/';

//   // Dynamic Dashboard/Home Button Logic
//   const dashboardRoute = isProviderDashboard ? '/' : isConsumerDashboard ? '/' : (location.pathname.startsWith('/provider') ? '/providerDash' : '/ConsumerDash');
//   const dashboardText = isProviderDashboard || isConsumerDashboard ? 'Home' : 'Dashboard';

//   // Navigation items
//   const navigation = [
//     { name: dashboardText, href: dashboardRoute }, // Dynamic Dashboard/Home button
//     { name: 'Team', href: '#' },
//     { name: 'Projects', href: '#' },
//     { name: 'Calendar', href: '#' },
//   ];

//   function classNames(...classes) {
//     return classes.filter(Boolean).join(' ');
//   }

//   return (
//     <Disclosure as="nav" className="bg-white">
//       <div className="mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button */}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
//             </DisclosureButton>
//           </div>

//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <div className="nav-heading text-2xl font-bold">
//             <h1>Supher</h1>
//             </div>
//           </div>

//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className={classNames(
//                       'text-gray-800 hover:bg-gray-700 hover:text-white',
//                       'rounded-md px-3 py-2 text-xl font-medium'
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pt-2 pb-3">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               className={classNames(
//                 'text-gray-800 hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium'
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   );
// };

// export default Navbar;





// main
// import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { useLocation } from 'react-router-dom';



// const  Navbar = ()=> {
//   const location = useLocation();

//   // Determine if the user is a Consumer or Provider based on the current route
//   const isProvider = location.pathname.startsWith('/provider');


//   const navigation = [
//     { name: 'Dashboard', href: isProvider ? '/providerDash' :'/consumerDash' },
//     { name: 'Team', href: '#',  },
//     { name: 'Projects', href: '#',},
//     { name: 'Calendar', href: '#',  },
//   ]
  
//   function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
//   }

//   return (
//     <Disclosure as="nav" className="bg-white">
//       <div className="mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
//             </DisclosureButton>
//           </div>

//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//           <div className="nav-heading text-5xl black font-bold ">
//         <h1>Supher</h1>
//         </div>
      
       
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
//             <div className="flex shrink-0 items-center">
          
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       'text-gray-800 hover:bg-gray-700 hover:text-white',
//                       'rounded-md px-3 py-2 text-xl font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pt-2 pb-3">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 'text-gray-800 hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   )
// }


// export default Navbar