import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Centercrouser";
const Centercrouser = () => {
  const settings = {
    dots: false, // Shows navigation dots below the slider
    infinite: true, // Enables infinite looping
    speed: 5000, // Transition duration (increase for slower movement)
    slidesToShow: 4, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll per transition
    autoplay: true,          // Enables auto-play
    autoplaySpeed: 0, // No delay between transitions
    cssEase: "linear", // Linear easing for smooth, continuous motion
    arrows: false, // Hides next/previous buttons
    pauseOnHover: true, // Continues sliding even when hovered
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
      <h1 className="text-center font-bold text-2xl p-3 ">
        Automation-service
      </h1>
      <div className="container max-w-6xl mx-auto">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="center-box-one">
              <div class=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="./assets/plumber.jpeg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <p class="mb-2 tracking-tight text-gray-900 dark:text-white">
                      this that services
                    </p>
                  </a>

                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      rating
                    </p>
                  </a>
                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      price
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="center-box-two">
            <div class=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="./assets/plumber.jpeg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <p class="mb-2 tracking-tight text-gray-900 dark:text-white">
                      this that services
                    </p>
                  </a>

                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      rating
                    </p>
                  </a>
                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      price
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="center-box-three">
            <div class=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="./assets/plumber.jpeg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <p class="mb-2 tracking-tight text-gray-900 dark:text-white">
                      this that services
                    </p>
                  </a>

                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      rating
                    </p>
                  </a>
                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      price
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="center-box-four">
            <div class=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="./assets/plumber.jpeg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <p class="mb-2 tracking-tight text-gray-900 dark:text-white">
                      this that services
                    </p>
                  </a>

                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      rating
                    </p>
                  </a>
                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      price
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="center-box-five">
            <div class=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="./assets/plumber.jpeg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <p class="mb-2 tracking-tight text-gray-900 dark:text-white">
                      this that services
                    </p>
                  </a>

                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      rating
                    </p>
                  </a>
                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      price
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="center-box-six">
            <div class=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="./assets/plumber.jpeg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <p class="mb-2 tracking-tight text-gray-900 dark:text-white">
                      this that services
                    </p>
                  </a>

                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      rating
                    </p>
                  </a>
                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      price
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="center-box-seven">
            <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="./assets/plumber.jpeg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <p class="mb-2 tracking-tight text-gray-900 dark:text-white">
                      this that services
                    </p>
                  </a>

                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      rating
                    </p>
                  </a>
                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      price
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="c-box-eight">
            <div class=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="./assets/plumber.jpeg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <p class="mb-2 tracking-tight text-gray-900 dark:text-white">
                      this that services
                    </p>
                  </a>

                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      rating
                    </p>
                  </a>
                  <a href="#">
                    <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                      price
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Centercrouser;
