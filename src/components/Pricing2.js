import React from 'react';
import { Button } from './Button';
import './Pricing2.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize, GiNetworkBars, GiMeshNetwork } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { MdNetworkCheck } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <MdNetworkCheck />
                </div>
                <h3>Paquete #4</h3>
                <h4>895/LPS</h4>
                <p>Al mes</p>
                <ul className='pricing__container-features'>
                  <li>6 MB </li>
                  
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Elegir Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiMeshNetwork />
                </div>
                <h3>Paquete #5</h3>
                <h4>999/LPS</h4>
                <p>Al mes</p>
                <ul className='pricing__container-features'>
                  <li>7 MB </li>
                  
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Elegir Plan
                </Button>
              </div>
            </Link>
            
            
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
