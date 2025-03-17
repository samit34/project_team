import React from 'react'
import Heading from '../../../../Components/heading/Heading'



const serviceProviders = [
    { name: "Sarah Newman", role: "CLEANER", img: "./assets/imageBanner/hrp1.jpg" },
    { name: "John Doe", role: "PLUMBER", img: "./assets/imageBanner/hrp2.jpg" },
    { name: "Emma Smith", role: "ELECTRICIAN", img: "./assets/imageBanner/hrp3.jpg" },
    { name: "Olivia Brown", role: "HOUSEKEEPER", img: "./assets/imageBanner/hrp4.jpg"},
    { name: "Sophia Davis", role: "BABYSITTER", img: "./assets/imageBanner/hrp5.jpg"},
    { name: "Michael Lee", role: " GARDENER", img: "./assets/imageBanner/hrp6.jpg" }
];
const HighRnkSerProvider = () => {
    return (
        <>
            <section className="hrsp-section">
                <Heading props='Service Provider' />
                <div className="hrsp-container">
                    <div className="max-w-6xl mx-auto px-6 pb-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {serviceProviders.map((provider, index) => (
                            <div key={index} className="rounded-lg bg-white p-2 shadow-md flex flex-col gap-6">
                                <div className='relative group overflow-hidden rounded-lg'>
                                    <img src={provider.img} alt={provider.name} className="w-full h-40 object-cover rounded-lg " />
                                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-80 transition-all duration-300 rounded-lg">
                                        <p className="font-bold bg-gradient-to-r from-[#f4ade2] to-[#FFB200] bg-clip-text text-transparent capitalize">{provider.name}</p>
                                        <p className="text-gray-300 text-sm">{provider.role}</p>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>
                    <div className="max-w-6xl mx-auto px-6">
                        {/* Bottom Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-slate-300 p-6 rounded-lg shadow-md">
                                <h2 className="text-xl font-bold text-gray-700">Highly skilled professionals are always at your service.</h2>
                                <button class=" text-sm mt-2 font-semibold py-1 bg-gradient-to-r from-[#f684d6] to-[#FFB200] bg-clip-text text-transparent"> CHOOSE A SERVICE →</button>

                                {/* <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                                   CHOOSE A SERVICE →
                                </button> */}
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-xl font-bold text-gray-700">
                                    We accept your requests 24 hours a day, 7 days a week
                                </h2>
                                <button class=" text-sm mt-2 font-semibold py-1 bg-gradient-to-r from-[#f684d6] to-[#FFB200] bg-clip-text text-transparent"> GET IN TOUCH →</button>

                                {/* <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                                    GET IN TOUCH  →
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default HighRnkSerProvider