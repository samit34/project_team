import React from 'react'
import Heading from '../../../../Components/heading/Heading'
import { HiArrowNarrowRight } from "react-icons/hi";

const allService = [
    {service:"Home Services"},
    {service:"Personal Services"},
    {service:"Automotive Services"},
    {service:"Health and Wellness"},
    {service:"Business Services"},
    {service:"Education and Tutoring Services"},
    {service:"Childcare and Family Services"},
    {service:"Event and Entertainment Services"},
    {service:"Real Estate and Property Management"},
    {service:"Technology and Electronics Services"},
    {service:"Transport and Logistics"},
    {service:"LifeStyle and Wellness Coaching"},
    {service:"Creative and Artistic Services"},
    {service:"Legal and Financial Services"},
    {service:"Security Services"},
    {service:"Pet Services"},
    {service:"Outdoor and Adventure Services"},
]

const AllServiceList = () => {
  return (
    <section className="adds-section">
                <Heading props='All Services' />
                <div className="adds-container ">
                    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {allService.map((services, index) =>(
                        <div key={index} className="rounded-lg bg-white p-4 pt-10 shadow-md flex flex-col  gap-6">
                            <div className="flex flex-row space-x-14 sm:space-x-10 w-full space-y-2">
                                <div className="w-4/5">
                                <p className='text-sm md:text-base font-[600] '>{services.service}</p>
                                    
                                </div>
                                <div className="w-1/5">
                                    <p className='w-5 h-5'><HiArrowNarrowRight /></p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
  )
}

export default AllServiceList



