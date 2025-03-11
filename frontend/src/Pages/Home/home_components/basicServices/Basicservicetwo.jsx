import React from "react";
import { FaPlateWheat } from "react-icons/fa6";
import { SiBookstack } from "react-icons/si";
import { IoIosWater } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { TbRibbonHealth } from "react-icons/tb";
import { FaBusinessTime } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import { MdCleaningServices } from "react-icons/md";
import { GiMountaintop } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";
const Basicservicetwo = () => {
  return (
    <>
    <h1 className="text-center text-4xl font-bold"  >Basic-Services</h1>
      <div className=" container max-w-6xl mx-auto p-6">
        <div className="basic-service-div">
          <div className="basic-service-inner-div flex flex-wrap gap-10 ">
            {/* service-one    w-20 */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
                <FaPlateWheat className="text-red-800 text-4xl " />
              </div>
              <h5   className= "text-center">Restaurants</h5>
            </div>

            {/* service-two-book-services */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
                < SiBookstack className="text-green-800 text-4xl " />
              </div>
              <h5   className= "text-center">Education</h5>
            </div>

            {/* service-three plumber-service */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
                <IoIosWater className="text-blue-800 text-4xl " />
              </div>
              <h5   className= "text-center">Plumbing</h5>
            </div>

            {/* service-one    w-20 home service */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
                <FaHome className="text-brown-800 text-4xl " />
              </div>
              <h5   className= "text-center">Home</h5>
            </div>

            {/* service-one    w-20 car-service */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
                <FaCar className="text-yellow-800 text-4xl " />
              </div>
              <h5   className= "text-center">Car services</h5>
            </div>

            {/* service-one    w-20  pet services */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
                <MdOutlinePets  className="text-red-400 text-4xl " />
              </div>
              <h5   className= "text-center"   >Pet services</h5>
            </div>

            {/* service-one    w-20 health service  */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
                <TbRibbonHealth className="text-blue-900 text-4xl " />
              </div>
              <h5   className= "text-center">Health service</h5>
            </div>

            {/* service-one    w-20 business service */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
              <FaBusinessTime  className="text-red-800 text-4xl " />
              </div>
              <h5   className= "text-center">Business Service</h5>
            </div>

            {/* service-one    w-20 children care */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
              <FaChildren  className="text-pink-400 text-4xl " />
              </div>
              <h5   className= "text-center">Children care</h5>
            </div>

            {/* service-one    w-20  real-estate */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
              <FaBuilding className="text-gray-800 text-4xl " />
              </div>
              <h5   className= "text-center">Real State</h5>
            </div>

            {/* service-one    w-20 security service */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
                <MdSecurity className="text-red-800 text-4xl " />
              </div>
              <h5   className= "text-center">Security services</h5>
            </div>

            {/* service-one    w-20 technology services */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
                <FaComputer className="text-black text-4xl " />
              </div>
              <h5   className= "text-center">Technology services</h5>
            </div>

            {/* service-one    w-20 financial service */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
                <FcMoneyTransfer className="text-red-800 text-4xl " />
              </div>
              <h5   className= "text-center">Financial service</h5>
            </div>

            {/* service-one    w-20 cleaning-seervices */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
              <MdCleaningServices className="text-red-500 text-4xl " />
              </div>
              <h5   className= "text-center">Cleaning</h5>
            </div>

            {/* service-one  teravel  w-20 */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
                <GiMountaintop  className="text-blue-800 text-4xl " />
              </div>
              <h5   className= "text-center">teravel</h5>
            </div>

            {/* service-one    w-20 */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
                <GrYoga className="text-red-800 text-4xl " />
              </div>
              <h5   className= "text-center">Yoga</h5>
            </div>

            {/* service-one    w-20 */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
                <MdFamilyRestroom 
                className="text--800 text-4xl " />
              </div>
              <h5   className= "text-center">Restaurants</h5>
            </div>

            {/* service-one    w-20 */}
            <div className="service-one    w-20">
              <div className="border-2 flex justify-center px-4 py-6 rounded-2xl">
              <MdOutlineFaceRetouchingNatural 
              className="text-red-800 text-4xl" />
              </div>
              <h5   className= "text-center">Beauty services</h5>
            </div>

           

         
         

          </div>
        </div>
      </div>
    </>
  );
};

export default Basicservicetwo;
