import React from 'react'
import Heading from '../../../../Components/heading/Heading'

const ServiceStatic = () => {
  return (
    <>
    <section className="ser-statics bg-slate-100">
        <Heading props="Service Statistics"/>
        <div className="ser-static-container ">
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
                
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-2xl font-semibold text-blue-600">150+</h3>
                        <p className="text-gray-600">Services Provided</p> 
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-2xl font-semibold text-blue-600">200+</h3>
                        <p className="text-gray-600 ">Happy client</p> 
                    </div> <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-2xl font-semibold text-blue-600">4.8/5</h3>
                        <p className="text-gray-600">Average Rating</p> 
                    </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ServiceStatic