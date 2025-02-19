import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Category_banner.css'; // Your custom styles


const Category_banner = () => {
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
              <div className='category-box-one'>
                <h3>Slide 1</h3>
              </div>
              <div className='category-box-two'>
                <h3>Slide 2</h3>
              </div>
              <div className='category-box-three'>
                <h3>Slide 3</h3>
              </div>
              <div className='category-box-four'>
                <h3>Slide 4</h3>
              </div>
              <div className='category-box-five'>
                <h3>Slide 5</h3>
              </div>
              <div className='category-box-six'>
                <h3>Slide 6</h3>
              </div>
            </Slider>
          </div>
        </>
      );
}

export default Category_banner