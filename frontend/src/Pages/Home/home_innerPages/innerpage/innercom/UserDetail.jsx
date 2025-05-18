import React from 'react'
import { Link, useParams } from 'react-router-dom'
import servicesData from '../../homeIn';
import { IoIosStar } from 'react-icons/io';
import { MdOutlineCurrencyRupee } from 'react-icons/md';
import { CiBookmark } from "react-icons/ci";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdChatbubbles } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Footprints } from 'lucide-react';


const UserDetail = ({ user }) => {
  if (!user) {
    return <p className="text-center text-red-500">No user data found.</p>;
  }
  return (
    <>

      <div className="p-4 md:p-8 bg-gray-50 min-h-screen flex flex-col gap-6">
     {/* Personal Information Card */}
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold bg-gradient-to-r from-[#f4ade2] to-[#FFB200] bg-clip-text text-transparent">Personal Information</h2>
            </div>
            <div className="">
                    <Link to="/booking">
                        <button className=" py-1 px-2 flex gap-1 items-center">
                           <span className='text-sm md:flex underline text-blue-500'>Book Now</span>
                            <span className='max-sm:hidden'>→</span>
                        </button>
                        </Link>
                    </div>

          </div>
          {/* <div className="flex justify-between"> */}
          <div className='w-20 h-20 my-5 flex justify-between '>
            <img src={user.imageSrc} alt={user.imageAlt} className='w-20 h-20   object-cover rounded-full' />
            

          </div>
          
          
          {/* </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-sm text-gray-500">First Name</p>
              <p className="font-medium">{user.username}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Name</p>
              <p className="font-medium">{user.username}</p>
            </div>
            <div className="">
              <p className="text-sm text-gray-500">Bio</p>
              <p className="font-medium">{user.Designn}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{user.phno}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="font-medium">{user.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">City/State</p>
              <p className="font-medium">Arizona, United States</p>
            </div>
           
            <div>
              <p className="text-sm text-gray-500">Rating & Reviews</p>
              <p className="font-medium flex gap-1 justify-start items-center"><IoIosStar className='text-amber-300' />{user.rating}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="font-medium flex gap-px justify-start items-center"><MdOutlineCurrencyRupee className='text-black' />{user.price}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-500">About</p>

              <p className="font-medium">{user.about}</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full">
          <div className="">
            <div className="flex justify-start">
            <h2 className="mb-2 text-lg font-semibold bg-gradient-to-r from-[#f4ade2] to-[#FFB200] bg-clip-text text-transparent">Services at your door step </h2>
            </div>
            <p className="text-sm text-gray-500">Just contact us as you want via </p>
          </div>
          <div className='my-4 flex justify-between items-center'>
            <Link to={`/chat/${user._id}`} ><p className="text-sm text-gray-700 flex items-center gap-2"><IoMdChatbubbles className='w-5 h-5 text-gray-500'/>Chat</p> </Link>
            <Link>  <p className="text-sm text-gray-700 flex items-center gap-2"><IoCallSharp className='w-5 h-5 text-gray-500' />{user.phone}</p> </Link>  
              <Link><p className="text-sm text-gray-700 flex items-center gap-2"> <MdEmail className='w-5 h-5 text-gray-500' />{user.email}</p> </Link>
              
           
            </div>
         
        </div>


        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full">
          <div className="flex justify-between items-start">
            <h2 className="text-lg mb-2 font-semibold bg-gradient-to-r from-[#f4ade2] to-[#FFB200] bg-clip-text text-transparent">Reviwes</h2>

          </div>
          <div className='mb-2'>
              <p className="text-sm text-gray-500">User1</p>
              <div className="flex gap-px items-center">
              <IoIosStar className='text-amber-300'/>   <IoIosStar className='text-amber-300'/>  <IoIosStar className='text-amber-300'/> <IoIosStarHalf className='text-amber-300'/> <IoIosStarOutline className='text-amber-300' />
              </div>
              <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, adipisci.</p>
            </div>
            <div className='mb-2'>
              <p className="text-sm text-gray-500">User2</p>
              <div className="flex gap-px items-center">
              <IoIosStar className='text-amber-300'/>   <IoIosStar className='text-amber-300'/>  <IoIosStar className='text-amber-300'/> <IoIosStarHalf className='text-amber-300'/> <IoIosStarOutline className='text-amber-300' />
              </div>
              <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, adipisci.</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">User3</p>
              <div className="flex gap-px items-center">
              <IoIosStar className='text-amber-300'/>   <IoIosStar className='text-amber-300'/>  <IoIosStar className='text-amber-300'/> <IoIosStarHalf className='text-amber-300'/> <IoIosStarOutline className='text-amber-300' />
              </div>
              <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, adipisci.</p>
            </div>
         
        </div>

      </div>


    </>
  )
}

export default UserDetail