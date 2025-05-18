import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Related_jobs = () => {
 
const [services, setServices] = useState([]);
 
const service=()=>{
  console.log("this is a service function")
axios.post('http://localhost:8000/user/getAllServices')
.then((response) => {
  setServices(response.data);
}).catch((error) => {
  console.error('Error fetching services:', error);})}

useEffect(() => {
  service();},
   []);

  return (

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(service => (
        <div
          key={service._id.$oid}
          className="max-w-sm p-6 bg-white border-b-4 border-b-blue-600 border-gray-200 rounded-lg shadow-sm"
        >
          {/* Title */}
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 underline">
              {service.jobTitle}
            </h5>
          </a>

          {/* Description */}
          <p className="mb-3 font-normal text-gray-700">
            {service.jobDescription}
          </p>

          {/* Additional Info */}
          <ul className="mb-4 text-gray-600">
            <li><strong>Location:</strong> {service.location}</li>
            <li><strong>Category:</strong> {service.category} / {service.subcategory}</li>
            <li><strong>About:</strong> {service.aboutus}</li>
            <li><strong>Schedule:</strong> {service.schedule.map(s => (
              <span key={s._id.$oid}>
                {s.day} ({s.start} – {s.end})
              </span>
            )).reduce((prev, curr) => [prev, ', ', curr])}
            </li>
          </ul>
     
          {/* Read More Button */}
          <Link
            to={`/job/${service._id}`}
            className="inline-flex items-center text-blue-600 hover:underline font-medium"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
    
            </Link>
        </div>
      ))}
    </div>

  );
};

export default Related_jobs;
