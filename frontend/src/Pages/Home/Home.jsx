import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'; // Your custom styles
import Banner from '../../Components/Banner/Banner';
import { Navigation } from 'swiper/modules';
import BasicServices from './home_components/basicServices/BasicServices';
import AddServices from './home_components/additionalServices/AddServices';
import Category_banner from '../../Components/Category_banner/Category_banner';
import HighRnkSerProvider from './home_components/highRnkServprovider/HighRnkSerProvider';
import Footer from '../../Components/Footer/Footer';
import Centercrouser from './home_components/Center_crouser/Centercrouser';
import Centertwo from './home_components/Center-crouser-two/Center-two';
import Centerthree from './home_components/Center-crouser-three/Center-three';
import AllServiceList from './home_components/allServiceList/AllServiceList';
import Basicservicetwo from './home_components/basicServices/Basicservicetwo';
const Home = () => {
  return (
    <>
      <Banner />
      <Category_banner />
    <Basicservicetwo/>
      <Centercrouser />
      <AddServices />
      <Centertwo />
      <AllServiceList />
      <HighRnkSerProvider />
      <Centerthree />
      <Footer />
    </>
  );
};

export default Home;
