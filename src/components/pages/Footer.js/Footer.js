import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Unete al mejor internet de la zona
        </p>
        <p className='footer-subscription-text'>
          Dile adios a esos contratos de por vida
        </p>
          
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Acerca de Nosotros</h2>
            <Link to='/sign-up'>¿Quiénes Somos?</Link>
            <Link to='/'>Historia</Link>
            <Link to='/'>Misión</Link>
            <Link to='/'>Visión</Link>
            <Link to='/'>Terminos de Servicio</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Encuentranos</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/'>San Juan Pueblo, Atlántida, Honduras</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
            <h2>Siguenos en Nuestras Redes Sociales</h2>
            <href to= 'https://www.facebook.com/Megadatos-109698184257656' />
            <Link to='/https://www.facebook.com/Megadatos-109698184257656/'>Facebook</Link>
            <Link to='/wa.link/17vr6t'>WhatsApp</Link>
            
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src='/images/blancobordeado.png' className='navbar-icon' />
            MEGADATOS
            </Link>
          </div>
          <small className='website-rights'>MEGADATOS © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
          
            <Link
              className='social-icon-link'
              to={
                ''
              }
              target='_blank'
              aria-label='WhatsApp'
            >
              <FaWhatsapp />
            </Link>
            
            <Link
              className='social-icon-link'
              to='/wa.link/17vr6t'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
        </section>
    </div>
  );
}

export default Footer;