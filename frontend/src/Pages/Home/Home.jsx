import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'; // Your custom styles
import Banner from '../../Components/Banner/Banner';
import { Navigation } from 'swiper/modules';

import BasicServices from '../../Components/basicServices/BasicServices';
import AddServices from '../../Components/additionalServices/AddServices';

import Category_banner from '../../Components/Category_banner/Category_banner';
import AllServiceList from '../../Components/allServiceList/AllServiceList';


const Home = () => {


  return (
    <>
      <Banner />
      <Category_banner/>

      <BasicServices/>
      <AddServices/>
      <AllServiceList/>


    </>
  );
};

export default Home;
