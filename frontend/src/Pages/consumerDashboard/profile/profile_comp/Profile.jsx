import React from 'react'
import img from '/assets/img.jpg'
import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
// import { IoMdDoneAll } from "react-icons/io";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import { useAuth } from '../../../../Auth/Authcontext';
const data = [
    { name: "Jan", sales: 1000, prevSales: 800 },
    { name: "Feb", sales: 2400, prevSales: 1800 },
    { name: "Mar", sales: 1500, prevSales: 1200 },
    { name: "Apr", sales: 2800, prevSales: 2000 },
    { name: "May", sales: 3000, prevSales: 2200 },
    { name: "Jun", sales: 2500, prevSales: 2100 },
    { name: "Jul", sales: 2700, prevSales: 2300 },
];
const Profile = () => {
 
    const  {profile} =useAuth()
    console.log("this is the profile data",profile)
     
    return (
        <>
            <div className=" py-2 pb-5 mx-auto max-w-6xl 2xl:max-w-full">
                {/* mx-auto max-w-2xl lg:max-w-7xl  */}
                <div className="px-6 lg:px-8 ">

                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
                        <div className="relative lg:row-span-2 lg:row-start-1">
                            <div className="absolute inset-px rounded-lg bg-white "></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-lg">
                                {/* add pb-3 sm:px-10 sm:pt-10 sm:pb-0 px-8 */}
                                <div className="flex flex-col items-center text-center mx-auto w-44 h-44 px-4 pt-8 ">
                                    <img
                                        src={img}
                                        alt="Profile"
                                        className="rounded-[50%] w-44 h-44 sm:w-44 sm:h-44 lg:w-44 lg:h-44 xl:w-44 xl:h-44 object-cover"
                                    />
                                </div>
                                <div className="px-8 pt-2 pb-3 sm:px-10 sm:pt-2 sm:pb-0 text-center">
                                    <h2 className="text-xl font-semibold mt-4">{item.username}</h2>
                                    <p className="text-gray-500">{item.role}</p>
                                </div>
                                <div className="px-8 pt-2 pb-3 sm:px-10 sm:pt-2 sm:pb-0 text-left">
                                    <div className="text-left w-full mt-6 ">
                                        <p className="mt-2  text-md font-medium tracking-tight max-lg:text-center text-[#6C757D] uppercase pb-2">
                                            About Me :
                                        </p>
                                        <p className=" text-sm text-[#040405]">
                                            {item.aboutus}
                                        </p>
                                        <p className="mt-2 text-[#A1A1AA]"><strong >Full Name:</strong>  {item.username}</p>
                                        <p className='text-[#A1A1AA]'><strong >Mobile:</strong> {item.phone}</p>
                                        <p className='text-[#A1A1AA]'><strong >Email:</strong> {item.email}</p>
                                        <p className='text-[#A1A1AA]'><strong >Location:</strong> {item.location}</p>
                                    </div>

                                </div>

                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 "></div>
                        </div>
                        {/* adding  */}

                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Performance Section */}
                            <div className="relative flex-1 max-lg:row-start-2">
                                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                                <div className="relative h-full overflow-hidden rounded-lg px-8 pt-8 sm:px-10 sm:pt-10 pb-10">
                                    <div className="text-left">
                                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-left">
                                            Overall Rating
                                        </p>
                                        <div className='mt-2 flex items-center justify-left gap-2  text-gray-600 max-lg:text-left max-w-lg text-sm/6'>
                                            <FaStar />
                                            <p className="">
                                                4.78 (30K  reviews)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                            </div>

                            {/* Security Section */}
                            <div className="relative flex-1 max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                                <div className="absolute inset-px rounded-lg bg-white"></div>
                                <div className="relative h-full overflow-hidden rounded-[calc(var(--radius-lg)+1px)] px-8 pt-8 sm:px-10 sm:pt-10">
                                    <div className="text-left">
                                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-left    ">
                                            Total Earning
                                        </p>
                                        <div className='mt-2 flex items-center justify-left gap-2  text-gray-600 max-lg:text-left max-w-lg text-sm/6'>
                                            <MdOutlineCurrencyRupee />
                                            <p className="">
                                                20k
                                            </p>
                                        </div>
                                        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">

                                        </p>
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                            </div>
                        </div>





                        {/* adding */}

                        {/* <div className="relative lg:row-start-3">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                                    </p>
                                </div>

                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
                        </div> */}
                        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <div className="relative flex h-full flex-col overflow-hidden">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10 pb-10">
                                    <div className="flex justify-between align-center">
                                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-left capitalize">total Service provide</p>
                                        <p className="text-md mt-2 text-[#A1A1AA] flex uppercase justify-center items-center gap-2">100+ <p className='font-bold text-xs'> done</p> </p>

                                    </div>
                                    <div className="mt-4 h-24 md:h-28 lg:h-32">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                                <CartesianGrid strokeDasharray="3 3" />

                                                <XAxis dataKey="name" hide />
                                                <YAxis hide />
                                                <Tooltip />
                                                <Legend />

                                                <Line type="monotone" dataKey="prevSales" stroke="#8884d8" />

                                                <Line type="monotone" dataKey="sales" stroke="#82ca9d"/>
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                  
                                  
                                </div>

                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile