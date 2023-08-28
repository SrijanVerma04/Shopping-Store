import React from 'react'
import HeroSection from "./components/HeroSection"
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProduct from './components/FeatureProduct';

const Home = () => {
  return (
    <>
    <HeroSection name="Thapa Ecommerce"/>
    <FeatureProduct />
    <Services/>
    <Trusted/>
    </>
  )
};

export default Home