import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosStar } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import img1 from "/assets/imageBanner/ees1.jpg";
import img2 from '/assets/imageBanner/ees2.jpg';
import img3 from '/assets/imageBanner/ees3.jpg';
import img4 from '/assets/imageBanner/ees4.jpg';
import img5 from '/assets/imageBanner/ees5.jpg';
import img6 from '/assets/imageBanner/ees6.jpg';
import img7 from '/assets/imageBanner/ees7.jpg';
import Heading from '../../../../Components/heading/Heading';
import './eventCrouse.css';
const data = [
  { name: "Dj and music services", rating: "4.5", price: "350", img:img1  },
  { name: "Catering", rating: "4.5", price: "250", img:img2 },
  { name: "Photography and videography", rating: "4.5", price: "500", img:img3 },
  { name: "event decoration", rating: "4.5", price: "400", img:img4 },
  { name: "bartending services", rating: "4.5", price: "150", img:img5  },
  { name: "sound and lighting setup", rating: "4.5", price: "999", img:img6  },
  { name: "live performers", rating: "4.5", price: "999", img:img7 },

];

const Centertwo = () => {
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
        pauseOnHover: true, // Continues sliding even when hovered
        // rtl: true,
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
          <section className="event-section">
            <Heading props="event and entertainment services" />
        
          <div className="container max-w-6xl mx-auto p-2 sm:p-0">
            <div className="slider-container-event">
              <Slider {...settings}>
                {data.map((ser, index)=>(
                <div key={index} className="center-event-one">
                  <div class=" bg-white border border-gray-100 rounded-lg shadow-md">
                   <div className="for-events">
                   <a href="#">
                    <div className="for-event">
                      <img
                        class="rounded-t-lg object-cover w-full h-48 bg-center"
                        src={ser.img}
                        alt=""
                      />
                       <div className="h3">
                       <h5 className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent capitalize pb-3 text-[1.2rem] font-bold">click to explore</h5>

                       <div className="flex justify-between mt-3 ">
                        <div className="rating">
                          <a href="#">
                            <p class="mb-2  tracking-tight text-white flex gap-1 items-center justify-center font-semibold">
                              <IoIosStar className="w-4 h-4 text-amber-400" />{ser.rating}
                            </p>
                          </a>
                        </div>
                        <div className="price flex flex-col gap-px">
                          <a href="#">
                            <p class="mb-2  tracking-tight text-white flex gap-px items-center justify-center font-semibold">
                              <MdCurrencyRupee className="w-4 h-4 text-amber-400" /> {ser.price}
                            </p>
                          </a>
                        </div>
                      </div>
                       </div>
                      </div>
                    </a>
                   </div>
                   <div class="py-2 px-4">
                      <div className="my-2  h-[7vh]">
                        <a href="#">
                          {/* text-[#f4ade2]  */}
                          <p class="mb-2 text-gray-500 text-base font-medium capitalize">
                            {ser.name}
                          </p>
                        </a>

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
}

export default Centertwo