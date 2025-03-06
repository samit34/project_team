import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import servicesData from '../../home_innerPages/homeIn';
import Heading from '../../../../Components/heading/Heading';

const AllServiceList = () => {
  return (
    <section className="adds-section">
      <Heading props="All Services" />
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {servicesData.map((service, index) => (
          <Link
            key={index}
            to={`/homeInone/${service.category}`}
            className="rounded-lg bg-white p-4 pt-10 shadow-md flex flex-col gap-6 transition-transform hover:scale-105"
          >
            <div className="flex justify-between w-full">
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


