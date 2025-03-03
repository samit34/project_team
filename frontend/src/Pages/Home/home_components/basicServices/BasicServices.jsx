import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import Heading from '../../../../Components/heading/Heading';
const BasicServices = () => {
    return (
        <>
            <section className="bs-section">
                <Heading props='Basic Services'/>
                <div className="bs-container ">
                    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col sm:flex-row gap-6">
                            <div className="flex flex-col sm:space-y-10 pr-5 w-full md:w-1/2">
                                <h2 className="text-lg md:text-2xl font-semibold pb-3 sm:pb-0 md:break-words 2xl:break-words 2xl:text-wrap">Home 
                                <span className="md:block"> Services</span></h2>
                                <button className="px-4 py-2 rounded-3xl bg-gray-200 hover:bg-gray-500 text-gray-800 hover:text-gray-300 font-semibold w-fit transition">
                                    Learn More
                                </button>
                            </div>
                            <ul className='space-y-2 w-full md:w-1/2'>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3' /></span> <p>Plumbing</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3' /></span> <p>Electrical Work</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3' /></span> <p>Handyman Services</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3' /></span> <p>House Cleaning</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3'/></span> <p>Pest Control</p>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col sm:flex-row gap-6 ">
                            <div className="flex flex-col sm:space-y-10 pr-5w-full md:w-1/2">
                                <h2 className="text-lg md:text-2xl font-semibold pb-3 sm:pb-0">
                                Personal<span className="md:block"> Services</span></h2>
                                <button className="px-4 py-2 rounded-3xl bg-gray-200 hover:bg-gray-500 text-gray-800 hover:text-gray-300 font-semibold w-fit transition">
                                    Learn More
                                </button>
                            </div>
                            <ul className='space-y-2 w-full md:w-1/2'>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3' /></span> <p>Beauty Services</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3'/></span> <p>Massage Therapy</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3'/></span> <p>Personal-Fitness Training</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3'/></span> <p>Personal Shopping</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3'/></span> <p>Life Coaching</p>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col sm:flex-row gap-6">
                            <div className="flex flex-col sm:space-y-10 pr-5 w-full md:w-1/2">
                                <h2 className="text-lg md:text-2xl font-semibold pb-3 sm:pb-0">Health 
                                <span className="md:block"> Services</span>
                                </h2>
                                <button className="px-4 py-2 rounded-3xl bg-gray-200 hover:bg-gray-500 text-gray-800 hover:text-gray-300 font-semibold w-fit transition">
                                    Learn More
                                </button>
                            </div>
                            <ul className='space-y-2 w-full md:w-1/2'>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3'/></span> <p>Physical Therapy</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3' /></span> <p>Dietitian Services</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3'/></span> <p>Chiropractic Care</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3'/></span> <p>Mental Health Counseling</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3'/></span> <p>Nursing or Caregiving</p>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col sm:flex-row gap-6">
                            <div className="flex flex-col sm:space-y-10 pr-5 w-full md:w-1/2">
                                <h2 className="text-lg md:text-2xl font-semibold pb-3 sm:pb-0">
                                    Educational <span className="md:block">Services</span>
                                    </h2>
                                <button className="px-4 py-2 rounded-3xl bg-gray-200 hover:bg-gray-500 text-gray-800 hover:text-gray-300 font-semibold w-fit transition">
                                    Learn More
                                </button>
                            </div>
                            <ul className='space-y-2 w-full md:w-1/2'>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3'/></span> <p>Academic Tutoring</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3'/></span> <p>Test Preparation</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3'/></span> <p>Language Instruction</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3'/></span> <p>Music Lessons</p>
                                </li>
                                <li className="flex  items-center gap-2 text-gray-600">
                                    <span><FaCircleCheck color='#6CCDEA' className='w-3 h-3'/></span> <p>Art & Craft lessons</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default BasicServices

