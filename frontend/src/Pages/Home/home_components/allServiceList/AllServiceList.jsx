import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import servicesData from '../../home_innerPages/homeIn';
import Heading from '../../../../Components/heading/Heading';
import { useAuth } from '../../../../Auth/Authcontext';

const AllServiceList = () => {
   const { data} =  useAuth()
  return (
    <section className="adds-section">
      <Heading props="All Services" />
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((service, index) => (
          <Link
            key={index}
            to={`/homeInone/${service.category}`}
            // [#FFEDFA] 
            className="rounded-lg bg-white p-4 pt-10 shadow-md flex flex-col gap-6 transition-transform hover:scale-105 hover:text-white hover:bg-gradient-to-r hover:from-[#f4ade2] hover:to-[#FFB200]  "
          >
            <div className="flex justify-between w-full ">
              <p className="text-sm md:text-base font-semibold">{service.category}</p>
              <HiArrowNarrowRight className="w-5 h-5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllServiceList;


