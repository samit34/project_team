import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Providerhero.css';
import { Autoplay, Pagination } from 'swiper/modules';

const Providerhero = () => {
  // Create refs for progress indicator elements
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  // Callback for updating the autoplay progress
  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
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
      {/* Slides with images */}
      <SwiperSlide>
        <img
          src='./assets/Banner-image-4.jpg'
          alt="Banner 1"
          className="w-full h-auto object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src='./assets/Banner-img-1.jpg'
          alt="Banner 2"
          className="w-full h-auto object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src='./assets/Banner-img-2.jpg'
          alt="Banner 3"
          className="w-full h-auto object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src='./assets/Banner-img-3.jpg'
          alt="Banner 4"
          className="w-full h-auto object-cover"
        />
      </SwiperSlide>

      {/* Autoplay Progress Indicator */}
      <div className="autoplay-progress hidden " slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default Providerhero;
