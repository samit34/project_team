import React from 'react'
import Heading from '../../../../Components/heading/Heading'
import { MdCurrencyRupee } from "react-icons/md";
import Button from '../../../../Components/button/Button';
import img1 from "/assets/addser1.png";
import img2 from "/assets/addser5.png" ;
import img3 from "/assets/addser3.png";
import img4 from "/assets/addser1.png";
import img5 from "/assets/addser6.png";
import img6 from "/assets/addser7.png";
import img7 from "/assets/addser8.png";
import img8 from "/assets/addser1.png";
const data =[
    {name:"Home Services",img:img1 , price:"399",link:"#"},
    {name:"Automotive Services",img:img2, price:"499",link:"#"},
    {name:"Business Services",img:img3, price:"699",link:"#"},
    {name:"Pet Services",img:img4, price:"399",link:"#"},
    {name:"Event And Entertainment Services",img:img5, price:"399",link:"#"},
    {name:"Transport and Logistics Services",img:img6, price:"499",link:"#"},
    {name:"Legal and Financial Services",img:img7, price:"499",link:"#"},
    {name:"Childcare and Family Services",img:img8, price:"399",link:"#"}
    

]
const AddServices = () => {
    return (
        <>
            <section className="adds-section">
                <Heading props='Most Book Services' />
                <div className="adds-container ">
                    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {data.map((ser,index)=>(

                    
                        <div key={index} className="rounded-lg bg-white p-6 shadow-md flex flex-col  gap-6">
                            <div className="flex flex-row space-x-14 sm:space-x-10">
                                <div className="w-1/2">
                                    <div className="w-16 h-16">
                                    <img src={ser.img} alt="" className='w-16 h-16 img-fluid' />
                                    </div>
                                </div>
                                <div className="w-1/2 pl-2">
                                    <p className='text-[12px] flex items-center'><span className=' pr-1 text-[#fd7ed9] font-semibold'>FROM </span> <MdCurrencyRupee className='w-3 h-3 text-black'/>{ser.price}</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col">
                                <div className="heading-h1 w-full">
                                    <h2 className='text-base md:text-lg pb-3 break-words text-gray-500 font-medium capitalize'>{ser.name}</h2>
                                    <button class=" text-sm font-semibold py-1 bg-gradient-to-r from-[#f684d6] to-[#FFB200] bg-clip-text text-transparent"> Explore more →</button>
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

export default AddServices