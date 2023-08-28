import React from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/Productcontext'


const About = () => {

  const {myName} = useProductContext();

  return (
    <>
      {myName};

      <HeroSection name="Thapa Store"/>
    </>
  )
}

export default About