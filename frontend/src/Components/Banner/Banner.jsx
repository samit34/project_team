import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css';



// Import required modules
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';

export default function Banner() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: false,



                // }}
                pagination={false}

                modules={[Autoplay, Pagination, Scrollbar]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
                loop={true}
            >


                {/* Correctly using images inside slides */}
                <SwiperSlide className='bg-[url(/assets/imageBanner/home2.jpg)] bg-cover w-full h-auto bg-center relative '>
                    {/* <div className="absolute inset-0 bg-gray-900/50"></div> */}
                    <div className="absolute inset-0 bg-gray-950/50  opacity-50"></div>
                    <div className="absolute flex flex-col items-center justify-center gap-1 sm:gap-2 md:gap-4 px-2">
                        <p className=' text-base sm:text-lg md:text-2xl lg:text-4xl 2xl:text-5xl font-bold text-white capitalize text-wrap '>
                            <span className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent">
                                Home services At your door step
                            </span></p>
                        <p className="text-sm md:text-xl 2xl:text-3xl text-amber-50 text-wrap">Highly skilled and professionals service provider are always at your service.</p>
                        <button class="text-xs md:text-lg 2xl:text-2xl  py-1 text-white"> Explore more →</button>
                        {/*  underline underline-offset-4 decoration-[#FFB200] decoration-2 leading-relaxed */}
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-[url(/assets/imageBanner/beauty1.jpg)] bg-cover w-full h-auto  bg-center relative '> <div className="absolute inset-0 bg-gray-950/50 opacity-50"></div>
                    <div className="absolute flex flex-col items-center justify-center gap-1 sm:gap-2 md:gap-4 px-2">
                        <p className='text-base sm:text-lg md:text-2xl lg:text-4xl 2xl:text-5xl font-bold text-white capitalize text-wrap '>
                            <span className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent">
                                Personal services At your door step
                            </span></p>
                        <p className="text-sm md:text-xl 2xl:text-3xl text-amber-50 text-wrap">Highly skilled and professionals service provider are always at your service.</p>
                        <button class="text-xs md:text-lg 2xl:text-2xl  py-1 text-white"> Explore more →</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-[url(/assets/imageBanner/art.jpg)] bg-cover w-full h-auto  bg-center relative '> <div className="absolute inset-0 bg-gray-950/50  opacity-50"></div>
                    <div className="absolute flex flex-col items-center justify-center gap-1 sm:gap-2 md:gap-4 px-2">
                        <p className='text-base sm:text-lg md:text-2xl lg:text-4xl 2xl:text-5xl font-bold text-white capitalize text-wrap '>
                            <span className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent">
                                Creative and artistic services At your door step
                            </span></p>
                        <p className="text-sm md:text-xl 2xl:text-3xl text-amber-50 text-wrap">Highly skilled and professionals service provider are always at your service.</p>
                        <button class="text-xs md:text-lg 2xl:text-2xl  py-1 text-white"> Explore more →</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-[url(/assets/imageBanner/event.jpeg)] bg-cover w-full h-auto bg-center relative '> <div className="absolute inset-0 bg-gray-950/50  opacity-50"></div>
                    <div className="absolute flex flex-col items-center justify-center gap-1 sm:gap-2 md:gap-4 px-2">
                        <p className='text-base sm:text-lg md:text-2xl lg:text-4xl 2xl:text-5xl font-bold text-white capitalize text-wrap '>
                            <span className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent">
                                event and entertainment services At your door step
                            </span></p>
                        <p className="text-sm md:text-xl 2xl:text-3xl text-amber-50 text-wrap">Highly skilled and professionals service provider are always at your service.</p>
                        <button class="text-xs md:text-lg 2xl:text-2xl  py-1 text-white"> Explore more →</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-[url(/assets/imageBanner/spa.jpg)] bg-cover w-full h-auto bg-center relative '> <div className="absolute inset-0 bg-gray-950/50  opacity-50"></div>
                    <div className="absolute flex flex-col items-center justify-center gap-1 sm:gap-2 md:gap-4 px-2">
                        <p className='text-base sm:text-lg md:text-2xl lg:text-4xl 2xl:text-5xl font-bold text-white capitalize text-wrap '>
                            <span className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent">
                                lifestyle and wellness services At your door step
                            </span></p>
                        <p className="text-sm md:text-xl 2xl:text-3xl text-amber-50 text-wrap">Highly skilled and professionals service provider are always at your service.</p>
                        <button class="text-xs md:text-lg 2xl:text-2xl  py-1 text-white"> Explore more →</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-[url(/assets/imageBanner/outdoor.jpg)] bg-cover w-full h-auto bg-center relative '> <div className="absolute inset-0 bg-gray-950/50  opacity-50"></div>
                    <div className="absolute flex flex-col items-center justify-center gap-1 sm:gap-2 md:gap-4 px-2">
                        <p className='text-base sm:text-lg md:text-2xl lg:text-4xl 2xl:text-5xl font-bold text-white capitalize text-wrap '>
                            <span className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent">
                                outdoor and adventure services At your door step
                            </span></p>
                        <p className="text-sm md:text-xl 2xl:text-3xl text-amber-50 text-wrap">Highly skilled and professionals service provider are always at your service.</p>
                        <button class="text-xs md:text-lg 2xl:text-2xl  py-1 text-white"> Explore more →</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-[url(/assets/imageBanner/pet.jpg)] bg-cover w-full h-auto  bg-center relative '> <div className="absolute inset-0 bg-gray-950/50  opacity-50"></div>
                    <div className="absolute flex flex-col items-center justify-center gap-1 sm:gap-2 md:gap-4 px-2">
                        <p className='text-base sm:text-lg md:text-2xl lg:text-4xl 2xl:text-5xl font-bold text-white capitalize text-wrap '>
                            <span className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent">
                                pet services At your door step
                            </span></p>
                        <p className="text-sm md:text-xl 2xl:text-3xl text-amber-50 text-wrap">Highly skilled and professionals service provider are always at your service.</p>
                        <button class="text-xs md:text-lg 2xl:text-2xl  py-1 text-white"> Explore more →</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-[url(/assets/imageBanner/education.jpg)] bg-cover w-full h-auto bg-center relative '> <div className="absolute inset-0 bg-gray-950/50  opacity-50"></div>
                    <div className="absolute flex flex-col items-center justify-center gap-1 sm:gap-2 md:gap-4 px-2">
                        <p className='text-base sm:text-lg md:text-2xl lg:text-4xl 2xl:text-5xl font-bold text-white capitalize text-wrap '>
                            <span className="bg-gradient-to-r from-[#FFEDFA] to-[#FFB200] bg-clip-text text-transparent">
                                Educational and tutoring services At your door step
                            </span></p>
                        <p className="text-sm md:text-xl 2xl:text-3xl text-amber-50 text-wrap">Highly skilled and professionals service provider are always at your service.</p>
                        <button class="text-xs md:text-lg 2xl:text-2xl  py-1 text-white"> Explore more →</button>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide><img src='/assets/imageBanner/education.jpg' alt="Banner 4" className="w-full h-auto object-cover" /><h1 className='absolute text-center'>pppp</h1></SwiperSlide> */}

                {/* Autoplay Progress Indicator */}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>

                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}





{/* <SwiperSlide className="relative bg-[url('/assets/imageBanner/home2.jpg')] bg-cover bg-center">
                  
                  <div className="absolute inset-0 bg-black opacity-50"></div>

               
                  <h1 className="absolute inset-0 flex items-center justify-center text-2xl  font-bold text-white">
                      <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                          pppp
                      </span>
                  </h1>
              </SwiperSlide> */}

          