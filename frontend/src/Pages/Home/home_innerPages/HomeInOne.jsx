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
        className={`fixed inset-y-0 mt-16 lg:mt-2 left-0 z-30 w-64 bg-slate-100 shadow-md transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 lg:relative lg:translate-x-0 lg:flex lg:flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-semibold">{CategoryName}</h1>
          <X className="w-6 h-6 cursor-pointer lg:hidden" onClick={() => setIsOpen(false)} />
        </div>

        <nav className="mt-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {currentCategory?.subcategories.map((sub, index) => (
            <Link key={index} to={`/homeInone/${CategoryName}/${sub.link}`} className="block p-4 hover:bg-gray-200">
              {sub.name}
            </Link>
          ))}
          <hr className="my-4 border-gray-600" />

          {/* Other Services */}
          <div className="">
            <div className="flex items-center justify-between p-2 border-b">
              <h2 className=" text-lg font-semibold">Other Services</h2>
            </div>

            {servicesData.map((service, index) => (
              <Link
                key={index}
                to={`/homeInone/${service.category}`}
                className="flex items-center p-4 hover:bg-gray-200"
              >
                {service.icon} {service.category}
              </Link>
            ))}
          </div>
        </nav>
      </aside>

      {/* Main Content */} 
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-end p-4 bg-blue-300 shadow-md mb-3">
          <h2 className="text-md font-semibold p-2"><CiFilter /></h2>
          <h2 className="text-md font-semibold p-2"><CiGrid41 /></h2>
          <h2 className="text-md font-semibold p-2"><GrSort /></h2>
          <Ellipsis className="w-8 h-8 cursor-pointer lg:hidden p-2" onClick={() => setIsOpen(true)} />

        </header>

        <main className="p-6 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HomeInOne;



