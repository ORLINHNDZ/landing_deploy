import React from 'react';

import './../Services/ServicesExtra.css';
import { FaFire, FaHandsHelping } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize, GiNetworkBars, GiMeshNetwork } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { MdNetworkCheck } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ServicesExtra() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='services__section'>
        <div className='services__wrapper'>
          <h1 className='services__heading'>Nos Especializamos en</h1>
          <div className='services__container'>
            <div className='services__container-card'>
              <div className='services__container-cardInfo'>
                <div className='icon'>
                  <MdNetworkCheck />
                </div>
                <h3>Internet Residencial</h3>
               
                <ul className='services__container-features'>
                  <li> Navega con el mejor Internet Empezando Desde 585/LPS al Mes </li>
                  
                </ul>
                
              </div>
            </div>
            <div className='services__container-card'>
              <div className='services__container-cardInfo'>
                <div className='icon'>
                  <GiMeshNetwork />
                </div>
                <h3>Internet Coorporativo</h3>
               
                <ul className='services__container-features'>
                  <li> Servicio contratado con el cual se obtiene una red privada que no se comparte con otros usuarios. A diferencia de la banda ancha para el público general que tiene distribución y velocidad asimétricas, esta es una conexión simétrica. </li>
                  
                </ul>
                
              </div>
            </div>
            <div  className='services__container-card'>
              <div className='services__container-cardInfo'>
                <div className='icon'>
                  <FaHandsHelping />
                </div>
                <h3>Asesoría Técnica</h3>
                <ul className='services__container-features'>
                  <li>proporcionamos un servicio de consultoría y asesoramiento en nuevas tecnologías, diseño de seguridad informática y mejoras de la infraestructura e instalaciones. </li>
                  
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>


    </IconContext.Provider>
  );
}
export default ServicesExtra;
