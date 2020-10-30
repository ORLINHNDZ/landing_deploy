import React from 'react';

import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import Contact from '../Contact/Contact';

function SignUp() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Contact {...Contact}/>
      
      
    </>
  );
}


export default SignUp;
