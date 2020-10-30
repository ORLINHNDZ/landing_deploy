import React from 'react';
import { Button } from './Button';
import './Pricing.css';
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
          <h1 className='pricing__heading'>Planes Para Ti</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <MdNetworkCheck />
                </div>
                <h3>Paquete #1</h3>
                <h4>585/LPS</h4>
                <p>Al mes</p>
                <ul className='pricing__container-features'>
                  <li>3 MB </li>
                  
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
                <h3>Paquete #2</h3>
                <h4>690/LPS</h4>
                <p>Al mes</p>
                <ul className='pricing__container-features'>
                  <li>4 MB </li>
                 
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Elegir Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiNetworkBars />
                </div>
                <h3>Paquete #3</h3>
                <h4>795/LPS</h4>
                <p>Al mes</p>
                <ul className='pricing__container-features'>
                  <li>5 MB </li>
                  
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  ELegir Plan
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
