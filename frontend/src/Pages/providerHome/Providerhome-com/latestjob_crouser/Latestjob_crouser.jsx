import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './latestjob_crouser.css'; // Your custom styles


const Latestjob_crouser = () => {
    const settings = {
        dots: false,              // Shows navigation dots below the slider
        infinite: true,          // Enables infinite looping
        speed: 5000,             // Transition duration (increase for slower movement)
        slidesToShow: 4,         // Number of slides visible at once
        slidesToScroll: 1,       // Number of slides to scroll per transition
        autoplay: true,          // Enables auto-play
        autoplaySpeed: 0,        // No delay between transitions
        cssEase: "linear",       // Linear easing for smooth, continuous motion
        arrows: false,           // Hides next/previous buttons
        pauseOnHover: true,      // Continues sliding even when hovered
        responsive: [            // Responsive breakpoints
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
    
      return (
        <>
         
          {/* Other components like a Banner can be rendered here */}
          <div className="slider-container m-8 gap-4 ">
            <Slider {...settings} className="category-slider flex gap-4">
              <div className='category-box-one  sm:h-[10rem] 2xl:h-[15rem] bg-center object-cover'>
             
                <h3 className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent capitalize">Automotive Service</h3>
              </div>
              <div className='category-box-two  sm:h-[10rem] 2xl:h-[15rem] bg-center object-cover'>
                <h3 className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent capitalize">business Services</h3>
              </div>
              <div className='category-box-three  sm:h-[10rem] 2xl:h-[15rem] bg-center object-cover'>
                <h3 className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent capitalize">Childcare and family services</h3>
              </div>
              <div className='category-box-four  sm:h-[10rem] 2xl:h-[15rem] bg-center object-cover'>
                <h3 className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent capitalize">Real estate and property management</h3>
              </div>
              <div className='category-box-five  sm:h-[10rem] 2xl:h-[15rem] bg-center object-cover'>
                <h3 className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent capitalize">transport and logistics</h3>
              </div>
              <div className='category-box-six  sm:h-[10rem] 2xl:h-[15rem] bg-center object-cover'>
                <h3 className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent capitalize">legal and financial services </h3>
              </div>
            </Slider>
          </div>
        </>
      );
}

export default Latestjob_crouser