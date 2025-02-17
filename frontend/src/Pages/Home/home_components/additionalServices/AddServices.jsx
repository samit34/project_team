import React from 'react'
import Heading from '../../../../Components/heading/Heading'
import img1 from '/assets/addser1.png';

import Button from '../../../../Components/button/Button'
const AddServices = () => {
    return (
        <>
            <section className="adds-section">
                <Heading props='Most Book Services' />
                <div className="adds-container ">
                    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col  gap-6">
                            <div className="flex flex-row space-x-14 sm:space-x-10">
                                <div className="w-1/2">
                                    <img src={img1} alt="" className='w-16 h-16 img-fluid' />
                                </div>
                                <div className="w-1/2 pl-2">
                                    <p className='text-[12px]'>FROM $399</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col">
                                <div className="heading-h1 w-full">
                                    <h2 className='text-md md:text-xl font-semibold pb-3  break-all'>Home Services</h2>
                                    <Button props='Learn More' />
                                </div>
                                
                            </div>

                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col  gap-6">
                            <div className="flex flex-row space-x-14 sm:space-x-10">
                                <div className="w-1/2">
                                    <img src={img1} alt="" className='w-16 h-16 img-fluid' />
                                </div>
                                <div className="w-1/2 pl-2">
                                    <p className='text-[12px]'>FROM $499</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col">
                                <div className="heading-h1 ">
                                    <h2 className='text-md md:text-xl font-semibold pb-3  break-all'>Automotive Services</h2>
                                    <Button props='Learn More' />
                                </div>
                            </div>

                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col  gap-6">
                            <div className="flex flex-row space-x-14 sm:space-x-10">
                                <div className="w-1/2">
                                    <img src={img1} alt="" className='w-16 h-16 img-fluid' />
                                </div>
                                <div className="w-1/2 pl-2">
                                    <p className='text-[12px]'>FROM $699</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col">
                                <div className="heading-h1 ">
                                    <h2 className='text-md md:text-xl font-semibold pb-3  break-all'>Business Services</h2>
                                    <Button props='Learn More' />
                                </div>
                            </div>

                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col  gap-6">
                            <div className="flex flex-row space-x-14 sm:space-x-10">
                                <div className="w-1/2">
                                    <img src={img1} alt="" className='w-16 h-16 img-fluid' />
                                </div>
                                <div className="w-1/2 pl-2">
                                    <p className='text-[12px]'>FROM $399</p>
                                </div>
                            </div>
                            
                            <div className="w-full flex flex-col">
                                <div className="heading-h1 ">
                                    <h2 className='text-md md:text-xl font-semibold pb-3  break-all'>Pet Services</h2>
                                    <Button props='Learn More' />
                                </div>
                            </div>

                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col  gap-6">
                            <div className="flex flex-row space-x-14 sm:space-x-10">
                                <div className="w-1/2">
                                    <img src={img1} alt="" className='w-16 h-16 img-fluid' />
                                </div>
                                <div className="w-1/2 pl-2">
                                    <p className='text-[12px]'>FROM $399</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col">
                                <div className="heading-h1 ">
                                    <h2 className='text-md md:text-xl font-semibold pb-3 break-all'>Event And Entertainment Services</h2>
                                    <Button props='Learn More' />
                                </div>
                            </div>

                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col  gap-6">
                            <div className="flex flex-row space-x-14 sm:space-x-10">
                                <div className="w-1/2">
                                    <img src={img1} alt="" className='w-16 h-16 img-fluid' />
                                </div>
                                <div className="w-1/2 pl-2">
                                    <p className='text-[12px]'>FROM $399</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col">
                                <div className="heading-h1 ">
                                    <h2 className='text-md md:text-xl font-semibold pb-3 break-all '>Transport and Logistics Services</h2>
                                    <Button props='Learn More' />
                                </div>
                            </div>

                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col  gap-6">
                            <div className="flex flex-row space-x-14 sm:space-x-10">
                                <div className="w-1/2">
                                    <img src={img1} alt="" className='w-16 h-16 img-fluid' />
                                </div>
                                <div className="w-1/2 pl-2">
                                    <p className='text-[12px]'>FROM $399</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col">
                                <div className="heading-h1 ">
                                    <h2 className='text-md md:text-xl font-semibold pb-3 break-all'>Legal and Financial Services</h2>
                                    <Button props='Learn More' />
                                </div>
                            </div>

                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col  gap-6">
                            <div className="flex flex-row space-x-14 sm:space-x-10">
                                <div className="w-1/2">
                                    <img src={img1} alt="" className='w-16 h-16 img-fluid' />
                                </div>
                                <div className="w-1/2 pl-2">
                                    <p className='text-[12px]'>FROM $399</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col">
                                <div className="heading-h1 ">
                                    <h2 className='text-md md:text-xl font-semibold pb-3  break-all'>Childcare and Family Services</h2>
                                    <Button props='Learn More' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddServices