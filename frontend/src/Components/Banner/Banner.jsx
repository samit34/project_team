import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css';



// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
            pagination={{
                clickable: false,
            }}
           
            modules={[Autoplay, Pagination]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
            loop={true}
        >
            {/* Correctly using images inside slides */}
            <SwiperSlide><img src='./assets/Banner-image-4.jpg' alt="Banner 1" className="w-full h-auto object-cover" /></SwiperSlide>
            <SwiperSlide><img src='./assets/Banner-img-1.jpg' alt="Banner 2" className="w-full h-auto object-cover" /></SwiperSlide>
            <SwiperSlide><img src='./assets/Banner-img-2.jpg' alt="Banner 3" className="w-full h-auto object-cover" /></SwiperSlide>
            <SwiperSlide><img src='./assets/Banner-img-3.jpg' alt="Banner 4" className="w-full h-auto object-cover" /></SwiperSlide>

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





