import React from 'react'
import "./contact.css"
import {MdOutlineMailOutline} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kx7degc', 'template_la6g7x1', form.current, 'Jdtt6ZJz_d2xRRBdL')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
        <MdOutlineMailOutline className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>traviskowalenko@hotmail.com</h5>
          <a href="mailto:traviskowalenko@hotmail.com" target="_blank">Send a Message</a>
        </article>
        <article className="contact__option">
          <FaFacebookMessenger className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Travis Kowalenko</h5>
          <a href="https://m.me/travis.kowalenko" target="_blank">Send a Message</a>
        </article>
    
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/> 
        <input type="email" name='email' placeholder='Your Email' required/> 
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact