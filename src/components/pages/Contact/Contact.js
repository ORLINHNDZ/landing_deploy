import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link, Redirect, Route } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import emailjs from "emailjs-com";
import { MdFingerprint } from 'react-icons/md';




function Contact() {

  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('123', 'template_f95kqd7', e.target, 'user_I4leLpeqBWxOeTgdMpdVK')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
    
    
}








  return (

    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Adquiere Hoy tu Plan de Internet
        </p>
        <p className='footer-subscription-text'>
         
        </p>
        <div className='input-areas'>


        <form onSubmit={sendEmail}>
                    <div className="footer-input">
                    <div>
                    <select name="subject" className="footer-input">
                    <option value="Paquete #1">Plan 1</option> 
                    <option value="Paquete #2" >Plan 2</option>
                    <option value="Paquete #3">Plan 3</option>
                    <option value="Paquete #4">Plan 4</option>
                    <option value="Paquete #5">Plan 5</option>
                    <option value="Internet Coorporativo">Internet Coorporativo</option>
                    </select>
                    </div>
                        
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="footer-input" placeholder="email@email.com" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="footer-input" placeholder="Nombre Apellido" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="tel" className="footer-input" placeholder="Numero de teléfono" name="number"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="footer-input" id="" cols="30" rows="8" placeholder="Tu Mensaje (Este campo no es obligatorio)" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                        
                        <Button type="submit" buttonStyle='btn--outline' value="Send Message">Enviar</Button>
                        
                        
                        </div>
                        
                    </div>
                </form>
                

         </div>
        
      </section>
 </div>        
  );
}

export default  (Contact);


