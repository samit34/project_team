import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carrepair from '/assets/imageBanner/carrepair.jpg'
import carwash from '/assets/imageBanner/carwash.jpg';
import cartow from '/assets/imageBanner/cartow.jpg';
import carinspect from '/assets/imageBanner/carinspect.jpg';
import cartyre from '/assets/imageBanner/cartyre.jpg';
import carrental from "/assets/imageBanner/carrental.jpg";
import { IoIosStar } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import Heading from "../../../../Components/heading/Heading.jsx";

import './centercrouser.css';
const data = [
  { autoservice: "car repair and maintenance", rating: "4.5", price: "350", img: carrepair },
  { autoservice: "Mobile car washing and detailing", rating: "4.5", price: "250", img: carwash },
  { autoservice: "towing services", rating: "4.5", price: "500", img: cartow },
  { autoservice: "car inspection and diagnostic", rating: "4.5", price: "400", img: carinspect },
  { autoservice: "tire changes and repairs", rating: "4.5", price: "150", img: cartyre },
  { autoservice: "car rental and chauffeur services", rating: "4.5", price: "999", img: carrental },

];

const Centercrouser = () => {


  const settings = {
    dots: false, // Shows navigation dots below the slider
    infinite: true, // Enables infinite looping
    speed: 7000, // Transition duration (increase for slower movement)
    slidesToShow: 4, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll per transition
    autoplay: true,          // Enables auto-play
    autoplaySpeed: 0, // No delay between transitions
    cssEase: "linear", // Linear easing for smooth, continuous motion
    arrows: false, // Hides next/previous buttons
    pauseOnHover: true,// Continues sliding even when hovered
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="automotion_service ">
        <Heading props="Automation Services" />
        <div className="container max-w-6xl mx-auto p-2 sm:p-0">
          <div className="slider-container-auto">
            <Slider {...settings}>
              {data.map((ser, index) => (
                <div key={index} className="center-auto-one">
                  <div class=" bg-white border border-gray-200 rounded-lg shadow-md">
                    <div className=" for-imgs">
                      {/*  relative flex  text-center align-middle justify-center items-center  overflow-hidden  */}
                      <a href="#">
                        <div className="for-img">
                          <img
                            class="rounded-t-lg object-cover w-full h-48 bg-center"
                            src={ser.img}
                            alt=""
                          />
                          <h5 className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent capitalize pb-3">click to explore</h5>
                        </div>
                      </a>
                    </div>
                    <div class="py-2 px-4">
                      <div className="my-2  h-[7vh]">
                        <a href="#">
                          {/* text-[#f4ade2]  */}
                          <p class="mb-2 text-gray-500 text-base font-medium capitalize">
                            {ser.autoservice}
                          </p>
                        </a>

                      </div>
                      <div className="flex justify-between mt-3 ">
                        <div className="rating">
                          <a href="#">
                            <p class="mb-2  tracking-tight text-gray-600 flex gap-1 items-center justify-center">
                              <IoIosStar className="w-4 h-4 text-amber-400" />{ser.rating}
                            </p>
                          </a>
                        </div>
                        <div className="price flex flex-col gap-px">
                          <a href="#">
                            <p class="mb-2  tracking-tight text-gray-600 flex gap-px items-center justify-center">
                              <MdCurrencyRupee className="w-4 h-4 text-black" /> {ser.price}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ))}

            </Slider>
          </div>

        </div>

      </section>
    </>
  );
};

export default Centercrouser;

