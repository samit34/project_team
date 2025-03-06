import React from 'react'


import servicesData from '../../homeIn'
import { useParams } from 'react-router-dom'
import { IoIosStar } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const FirstInner = () => {
  const { CategoryName, subcategory } = useParams();
  const currentCategory = servicesData.find(service => service.category === CategoryName);
  const selectedSubcategory = currentCategory?.subcategories.find(sub => sub.link === subcategory);

  return (
    <>
      <div className="bg-blue-100 rounded-lg">
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {selectedSubcategory?.userprofile.map((user, index) => (
            <div key={index} className="rounded-lg bg-white  p-4 md:p-6 shadow-md flex flex-col gap-3">
              <div className="flex flex-row space-x-14 sm:space-x-10">
                <div className="w-1/2">
                  <div className="w-16 h-16">
                    <img src={user.imageSrc} alt={user.imageAlt} className='w-16 h-16 rounded-full img-fluid object-cover' />
                  </div>
                </div>
                <div className="w-1/2 pl-2">
                  <p className='text-[16px] mb-3 flex gap-1 justify-start items-center'><IoIosStar />{user.rating}</p>
                  <p className='text-[16px] flex gap-px justify-start items-center'> <MdOutlineCurrencyRupee />{user.price}</p>
                </div>
              </div>

              <div className="w-full flex flex-col">
                <div className="heading-h1 w-full">
                  <h2 className='text-md md:text-xl font-bold pb-1 break-all'>{user.name}</h2>
                  <h5 className='text-sm md:text-md font-semibold pb-3 break-all'>{user.Designation}</h5>
                  <button className="text-sm  py-1 text-black">View Details → </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


export default FirstInner

