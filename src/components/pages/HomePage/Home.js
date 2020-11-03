import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import Pricing2 from '../../Pricing2';
import About from '../About/About';
import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function Home() {
  return (
    <>
    <MessengerCustomerChat
    pageId="109698184257656"
    appId="817525709001583"
   />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <About />
      <Pricing />
      <Pricing2/>
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
