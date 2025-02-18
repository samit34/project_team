import React from 'react'
import Heading from '../../../../Components/heading/Heading'
const High_rank_user = () => {
    const serviceProviders = [
        { name: "Sarah Newman", role: "CLEANER", img: "./assets/hrimg.jpg" },
        { name: "John Doe", role: "PLUMBER", img: "./assets/hrimg2.jpg" },
        { name: "Emma Smith", role: "ELECTRICIAN", img: "./assets/hrimg3.jpg" },
        { name: "Olivia Brown", role: "HOUSEKEEPER", img: "./assets/img.jpg" },
        { name: "Michael Lee", role: "GARDENER", img: "./assets/img2.jpg" },
        { name: "Sophia Davis", role: "BABYSITTER", img: "./assets/hrimg.jpg" },
    ];

  return (
   <>
   <section className="high-users">
      <Heading props='High Rank Users' />
                <div className="hrsp-container">
                    <div className="max-w-6xl mx-auto p-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {serviceProviders.map((provider, index) => (
                            <div key={index} className="rounded-lg bg-white p-2 shadow-md flex flex-col gap-6">
                                <div className='relative group overflow-hidden rounded-lg'>
                                    <img src={provider.img} alt={provider.name} className="w-full h-40 object-cover rounded-lg " />
                                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
                                        <p className="text-white font-bold">{provider.name}</p>
                                        <p className="text-gray-300 text-sm">{provider.role}</p>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>
                    </div>
                    </section>
   </>
  )
}

export default High_rank_user