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

