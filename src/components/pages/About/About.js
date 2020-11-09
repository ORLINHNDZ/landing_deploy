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
                  <li>Megadatos nace a raíz de la necesidad que hay por brindar un servicio de internet que se caracterice por su calidad y precios en la zona. </li>
                  
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
                  
                  <li>Nuestra misión es ser los proveedores de internet preferidos por la gente, que sea nuestra calidad lo que nos diferencíe de la competencia.</li>
                  
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
                  <li>Para 2024 planeamos ser los principales proveedores de servicio en la zona. </li>
                  
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
