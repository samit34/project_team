import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "../homeIn";
import FirstInner from "./innercom/FirstInner";
import img from "/assets/Banner-img-1.jpg";
import img1 from "/assets/img.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
const InnerPageOne = () => {
  const { CategoryName, subcategory } = useParams();
  const currentCategory = servicesData.find(
    (service) => service.category === CategoryName
  );
  const selectedSubcategory = currentCategory?.subcategories.find(
    (sub) => sub.link === subcategory
  );

  return (
    <>
      

        {/* Content Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-4 rounded-lg bg-gray-50 shadow-md my-4">
          {/* Subcategory Heading */}
          <div className="flex justify-center pb-2 ">
            <h2 className="text-lg sm:text-xl text-center md:text-2xl font-bold uppercase bg-gradient-to-r from-[#f4ade2] to-[#FFB200] bg-clip-text text-transparent mb-3 ">
              about us
            </h2>
       
          </div>
          {/* Inner Content */}
          <div className="">
            <div className="max-w-6xl mx-auto  ">
              {/* Bottom Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className=" p-6 rounded-lg shadow-md bg-white">
                  <div className="flex justify-start ">
                  <h2 className="text-2xl font-bold mb-5 text-gray-500">
                  {/* <h2 className="text-2xl font-bold mb-5 bg-gradient-to-r from-[#f4ade2] to-[#FFB200] bg-clip-text text-transparent"> */}
                    For {selectedSubcategory?.name}{" "}
                  </h2>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 capitalize mb-3">
                    <strong className="text-2xl bg-gradient-to-r from-[#f4ade2] to-[#FFB200] bg-clip-text text-transparent font-bold">
                      Knock knock!
                    </strong>{" "}
                    Services at your door step
                  </h4>
                  <p className="text-base text-gray-500">
                    Highly skilled service provider for{" "}
                    {selectedSubcategory?.name} professionals are always at your
                    service. Just contact us as you want Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Tempore id voluptatibus
                    excepturi?
                  </p>
                  <button class="mt-4 text-sm font-semibold py-1 bg-gradient-to-r from-[#f684d6] to-[#FFB200] bg-clip-text text-transparent"> Explore more →</button>
{/* 
                  <button className="mt-4 bg-blue-300 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                    Explore services →
                  </button> */}
                </div>
                <div className="p-4 rounded-lg  shadow-md w-[100%] h-[100%] bg-white">
                  <img
                    src={img1}
                    alt=""
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Inner Content */}
        <div className="">
          <FirstInner />
        </div>
      {/* </div> */}
    </>
  );
};

export default InnerPageOne;

{/* <div className="py-2 pb-5 mx-auto max-w-6xl 2xl:max-w-full">
        
        <div className="relative w-full">

          <img src={currentCategory.banner} alt="" className="w-full h-48 md:h-64 lg:h-80 xl:h-96 object-cover rounded-lg" />


         
          <div className="absolute inset-1 sm:inset-10 flex items-center justify-start bg-opacity-40">
            <div className="block text-left">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-left px-4 bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent">
                {CategoryName}
              </h2>
              <p className="text-xs sm:text-sm my-2 text-white ml-4 capitalize text-wrap">
                services at your doorstep explore and connect <br />
                with professional & Experiene service provider
              </p>
              <button class="text-xs   ml-4 md:text-base 2xl:text-xl  py-1 text-white"> Explore more →</button>
             
            </div>
          </div>
        </div> */}
         {/* <button
                type="submit"
                className=" mt-3 ml-3 rounded-full px-2 py-1 sm:px-3 sm:py-2 text-white flex items-end sm:items-end sm:justify-center  text-xs sm:text-sm bg-blue-300"
              >
                Explore more
                <HiArrowNarrowRight className="w-3 h-3 sm:w-5 sm:h-5 ml-px" />
              </button> */}