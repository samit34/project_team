import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from '../../../../Components/heading/Heading';
import { IoIosStar } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import './businesCrousal.css';
import img1 from '/assets/imageBanner/bs1.jpg';
import img2 from '/assets/imageBanner/bs2.jpg';
import img3 from '/assets/imageBanner/bs3.jpg';
import img4 from '/assets/imageBanner/bs4.jpg';
import img5 from '/assets/imageBanner/bs5.jpg';
import img6 from '/assets/imageBanner/bs6.jpg';
import img7 from '/assets/imageBanner/bs7.jpg';
import img8 from '/assets/imageBanner/bs8.jpg';
import img9 from '/assets/imageBanner/bs9.jpg';
import img10 from '/assets/imageBanner/bs10.jpg';

const data = [
  { name: "graphic design", rating: "4.5", price: "350", img:img9  },
  { name: "web development", rating: "4.5", price: "250", img:img8 },
  { name: "Photography and videography", rating: "4.5", price: "500", img:img1 },
  { name: "digital marketing", rating: "4.5", price: "400", img:img10 },
  { name: "copywriting and content creation", rating: "4.5", price: "150", img:img2 },
  { name: "event planning and coordination", rating: "4.5", price: "999", img:img3  },
  { name: "IT support", rating: "4.5", price: "999", img:img4 },
  { name: "legal services", rating: "4.5", price: "999", img:img5 },
  { name: "Accounting and bookkeeping", rating: "4.5", price: "999", img:img7 },
  { name: "translation and transcription", rating: "4.5", price: "999", img:img6 }
  

];
const Centerthree = () => {
   
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
          <section className="business-section">
          <Heading props="Business service"/>
           
            <div className="container max-w-6xl mx-auto pb-[50px] ">
              <div className="slider-container">
                <Slider {...settings}>
                  {data.map((ser, index)=>(
                  <div key={index} className="center-bus-one">
                    <div class=" bg-white border border-gray-100 rounded-lg shadow-md">
                   <div className="for-buss">
                   <a href="#">
                    <div className="for-bus">
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
                  {/* <div className="center-box-two">
                  <div class=" bg-white border border-gray-200 rounded-lg shadow-md">
                      <a href="#">
                        <img
                          class="rounded-t-lg"
                          src="./assets/plumber.jpeg"
                          alt=""
                        />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <p class="mb-2 tracking-tight text-gray-900">
                            this that services
                          </p>
                        </a>
      
                        <a href="#">
                          <p class="mb-2  tracking-tight text-gray-900">
                            rating
                          </p>
                        </a>
                        <a href="#">
                          <p class="mb-2  tracking-tight text-gray-900">
                            price
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="center-box-three">
                  <div class=" bg-white border border-gray-200 rounded-lg shadow-md">
                      <a href="#">
                        <img
                          class="rounded-t-lg"
                          src="./assets/plumber.jpeg"
                          alt=""
                        />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <p class="mb-2 tracking-tight text-gray-900">
                            this that services
                          </p>
                        </a>
      
                        <a href="#">
                          <p class="mb-2  tracking-tight text-gray-900">
                            rating
                          </p>
                        </a>
                        <a href="#">
                          <p class="mb-2  tracking-tight text-gray-900">
                            price
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="center-box-four">
                  <div class=" bg-white border border-gray-200 rounded-lg shadow-md">
                      <a href="#">
                        <img
                          class="rounded-t-lg"
                          src="./assets/plumber.jpeg"
                          alt=""
                        />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <p class="mb-2 tracking-tight text-gray-900">
                            this that services
                          </p>
                        </a>
      
                        <a href="#">
                          <p class="mb-2  tracking-tight text-gray-900">
                            rating
                          </p>
                        </a>
                        <a href="#">
                          <p class="mb-2  tracking-tight text-gray-900">
                            price
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="center-box-five">
                  <div class=" bg-white border border-gray-200 rounded-lg shadow-md">
                      <a href="#">
                        <img
                          class="rounded-t-lg"
                          src="./assets/plumber.jpeg"
                          alt=""
                        />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <p class="mb-2 tracking-tight text-gray-900">
                            this that services
                          </p>
                        </a>
      
                        <a href="#">
                          <p class="mb-2  tracking-tight text-gray-900">
                            rating
                          </p>
                        </a>
                        <a href="#">
                          <p class="mb-2  tracking-tight text-gray-900">
                            price
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="center-box-six">
                  <div class=" bg-white border border-gray-200 rounded-lg shadow-md">
                      <a href="#">
                        <img
                          class="rounded-t-lg"
                          src="./assets/plumber.jpeg"
                          alt=""
                        />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <p class="mb-2 tracking-tight text-gray-900">
                            this that services
                          </p>
                        </a>
      
                        <a href="#">
                          <p class="mb-2  tracking-tight text-gray-900">
                            rating
                          </p>
                        </a>
                        <a href="#">
                          <p class="mb-2  tracking-tight text-gray-900">
                            price
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="center-box-seven">
                  <div class=" bg-white border border-gray-200 rounded-lg shadow-sm">
                      <a href="#">
                        <img
                          class="rounded-t-lg"
                          src="./assets/plumber.jpeg"
                          alt=""
                        />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <p class="mb-2 tracking-tight text-gray-900">
                            this that services
                          </p>
                        </a>
      
                        <a href="#">
                          <p class="mb-2  tracking-tight text-gray-900">
                            rating
                          </p>
                        </a>
                        <a href="#">
                          <p class="mb-2  tracking-tight text-gray-900">
                            price
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="c-box-eight">
                  <div class=" bg-white border border-gray-200 rounded-lg shadow-md">
                      <a href="#">
                        <img
                          class="rounded-t-lg"
                          src="./assets/plumber.jpeg"
                          alt=""
                        />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <p class="mb-2 tracking-tight text-gray-900">
                            this that services
                          </p>
                        </a>
      
                        <a href="#">
                          <p class="mb-2  tracking-tight text-gray-900">
                            rating
                          </p>
                        </a>
                        <a href="#">
                          <p class="mb-2  tracking-tight text-gray-900">
                            price
                          </p>
                        </a>
                      </div>
                    </div>
                  </div> */}
                </Slider>
              </div>
            </div>
            </section>
          </>
        );
      };


export default  Centerthree