import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import ServicesExtra from './ServicesExtra';

function Services() {
  return (
    <>
      <ServicesExtra/>
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;
