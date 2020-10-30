import React from 'react';

import './About.css';
import { FaFire, FaPeopleCarry, FaHistory, FaAutoprefixer } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize, GiNetworkBars, GiMeshNetwork } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { MdNetworkCheck } from 'react-icons/md';
import { Link } from 'react-router-dom';

function About() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='about__section'>
        <div className='about__wrapper'>
          <h1 className='about__heading'>Acerca de Nosotros</h1>
          <div className='about__container'>
            <div className='about__container-card'>
              <div className='about__container-cardInfo'>
                <div className='icon'>
                  <FaHistory />
                </div>
                <h3>Historia</h3>
               
                <ul className='about__container-features'>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel cumque earum dignissimos consectetur laboriosam veritatis repellendus blanditiis, culpa, id error architecto soluta eveniet ipsum eum saepe? Vel minus facilis perspiciatis. </li>
                  
                </ul>
                
              </div>
            </div>
            <div className='about__container-card'>
              <div className='about__container-cardInfo'>
                <div className='icon'>
                  <FaPeopleCarry />
                </div>
                <h3>Misión</h3>
               
                <ul className='about__container-features'>
                  
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente provident omnis odio soluta delectus nesciunt vel aliquam quis ab fugit totam nulla alias laborum, temporibus asperiores aliquid voluptatem, iusto recusandae.</li>
                  
                </ul>
                
              </div>
            </div>
            <div  className='about__container-card'>
              <div className='about__container-cardInfo'>
                <div className='icon'>
                  <FaAutoprefixer />
                </div>
                <h3>Visión</h3>
                <ul className='about__container-features'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos at minus placeat quaerat corrupti nihil officia exercitationem quis. Possimus molestias consequatur fugiat facere optio cum quas laudantium quia sint! </li>
                  
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default About;
