import React from 'react'

const AllServiceList = () => {
  return (
    <section className="adds-section">
                <Heading props='Most Book Services' />
                <div className="adds-container bg-blue-100">
                    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col  gap-6">
                            <div className="flex flex-row space-x-14 sm:space-x-10">
                                <div className="w-1/2">
                                    <img src={img1} alt="" className='w-16 h-16 img-fluid'/>
                                </div>
                                <div className="w-1/2 pl-2">
                                    <p className='text-[12px]'>FROM $399</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col">
                                <div className="heading-h1">
                                    <h2 className='text-md md:text-xl font-semibold pb-3 '>Home Services</h2>
                                    <Button props='Learn More'/>
                                </div>
                            </div>

                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col sm:flex-row gap-6">
                            hello
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col sm:flex-row gap-6">
                            hello
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col sm:flex-row gap-6">
                            hello
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col sm:flex-row gap-6">
                            hello
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col sm:flex-row gap-6">
                            hello
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md flex flex-col sm:flex-row gap-6">
                            hello
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default AllServiceList