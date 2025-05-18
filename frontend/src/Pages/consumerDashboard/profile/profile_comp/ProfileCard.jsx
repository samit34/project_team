import React, { useState } from 'react'
// import { FaEdit } from "react-icons/fa";
import { Pencil } from "lucide-react";
import { PencilSquareIcon } from '@heroicons/react/24/outline';


import ProfilePopup from './ProfilePopup.jsx';

const ProfileCard = () => {
    const [open, setOpen] = useState(false)


    return (
        <div className="p-4 md:p-8 bg-gray-100 min-h-screen flex flex-col gap-6">

            {/* Personal Information Card */}
            <div className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-lg font-semibold">Personal Information</h2>
                    </div>
                    <div className="">
                        {/* Pencil Button */}
                        <button onClick={() => setOpen(true)} className=" py-2 px-3 flex gap-2 items-center bg-gray-200 rounded-full hover:bg-gray-300">

                            <Pencil size={16} />
                            <span className='max-sm:hidden md:flex'>Edit</span>
                        </button>
                        <ProfilePopup open={open} setOpen={setOpen} />
                    </div>
                </div>
                <div className='w-20 h-20 my-5'>
                    <img src="/assets/img.jpg" alt="" className='w-20 h-20   object-cover rounded-full' />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <p className="text-sm text-gray-500">First Name</p>
                        <p className="font-medium">Chowdury</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Last Name</p>
                        <p className="font-medium">Musharof</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Email Address</p>
                        <p className="font-medium">randomuser@pimjo.com</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">+09 363 398 46</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Pan No.</p>
                        <p className="font-medium">539537538753875</p>
                    </div>
                    <div className="">
                        <p className="text-sm text-gray-500">Bio</p>
                        <p className="font-medium">Plumber</p>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-500">About</p>
                        <p className="font-medium">Plumber Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequatur sint ipsam, reprehenderit porro minus sequi aperiam debitis ea accusamus labore. Voluptatem?</p>
                    </div>
                </div>
            </div>


            <div className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full">
                <div className="flex justify-between items-start">
                    <h2 className="text-lg font-semibold">Address</h2>
                    <div className="">
                        <button onClick={() => setOpen(true)} className=" py-2 px-3 flex gap-2 items-center bg-gray-200 rounded-full hover:bg-gray-300">
                            <Pencil size={16} />
                            <span className='max-sm:hidden md:flex'>Edit</span>
                        </button>
                        <ProfilePopup open={open} setOpen={setOpen} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <p className="text-sm text-gray-500">Country</p>
                        <p className="font-medium">United States</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">City/State</p>
                        <p className="font-medium">Arizona, United States</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Postal Code</p>
                        <p className="font-medium">ERT 2489</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">TAX ID</p>
                        <p className="font-medium">AS4568384</p>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default ProfileCard;


