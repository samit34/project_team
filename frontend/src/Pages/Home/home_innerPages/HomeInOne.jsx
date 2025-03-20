import React, { useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { Ellipsis, X } from 'lucide-react';
import { CiGrid41, CiFilter } from 'react-icons/ci';
import { GrSort } from 'react-icons/gr';
import servicesData from './homeIn';

const HomeInOne = () => {
  const { CategoryName, subcategory } = useParams();
  const currentCategory = servicesData.find(service => service.category === CategoryName);


  const selectedSubcategory = currentCategory?.subcategories.find(sub => sub.link === subcategory);


  const [isOpen, setIsOpen] = useState(false);
// sidebar given
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 mt-14 lg:mt-px left-0 z-30 w-64 bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 lg:relative lg:translate-x-0 lg:flex lg:flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-semibold bg-gradient-to-r from-[#f4ade2] to-[#FFB200] bg-clip-text text-transparent">{CategoryName}</h1>
          <X className="w-6 h-6 cursor-pointer lg:hidden" onClick={() => setIsOpen(false)} />
        </div>

        <nav className="mt-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {currentCategory?.subcategories.map((sub, index) => (
            <Link key={index} to={`/homeInone/${CategoryName}/${sub.link}`} className="block p-4 hover:bg-gradient-to-r hover:text-white hover:from-[#f4ade2] hover:to-[#FFB200]">
              {sub.name}
            </Link>
          ))}
          <hr className="my-4 border-gray-600" />

          {/* Other Services */}
          <div className="">
            <div className="flex items-center justify-between p-2 border-b">
              <h2 className=" text-lg font-semibold bg-gradient-to-r from-[#f4ade2] to-[#FFB200] bg-clip-text text-transparent">Other Services</h2>
            </div>

            {servicesData.map((service, index) => (
              <Link
                key={index}
                to={`/homeInone/${service.category}`}
                className="flex items-center p-4 hover:bg-gradient-to-r hover:text-white hover:from-[#f4ade2] hover:to-[#FFB200] "
              >
                {service.icon} {service.category}
              </Link>
            ))}
          </div>
        </nav>
      </aside>

      {/* Main Content */} 
      <div className="flex-1 flex flex-col">

      

        <header className="flex items-center justify-end p-4 bg-white shadow-md mb-3">
          <h2 className="text-md font-semibold p-2"><CiFilter /></h2>
          <h2 className="text-md font-semibold p-2"><CiGrid41 /></h2>
          <h2 className="text-md font-semibold p-2"><GrSort /></h2>
          <Ellipsis className="w-8 h-8 cursor-pointer lg:hidden p-2" onClick={() => setIsOpen(true)} />

        </header>

        <main className="p-6 flex-1 overflow-auto">
        <div className="py-2 pb-5 mx-auto max-w-6xl 2xl:max-w-full">
        {/* Hero Image Section */}
        <div className="relative w-full">

          <img src={currentCategory.banner} alt="" className="w-full h-48 md:h-64 lg:h-80 xl:h-96 object-cover rounded-lg" />

          <div className="absolute inset-0 bg-gray-950/50  opacity-50"></div>

          {/* Centered Heading */}
          <div className="absolute inset-1 sm:inset-10 flex items-center justify-center bg-opacity-40">
            <div className="block ">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold  px-4 bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent">
                {CategoryName}
              </h2>
              <p className="text-xs sm:text-sm my-2 text-white ml-4 capitalize text-wrap">
                services at your doorstep explore and connect <br />
                with professional & Experiene service provider
              </p>
              <button class="text-xs   ml-4 md:text-base 2xl:text-xl  py-1 text-white"> Explore more →</button>
            
            </div>
          </div>
        </div>
        
          <Outlet />
          </div>
      
        </main>
      </div>
    </div>
  );
};

export default HomeInOne;



