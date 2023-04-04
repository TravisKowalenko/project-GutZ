import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/travis.kowalenko"><FaFacebookF/></a>
        <a href="https://instagram.com/traviskowalenko/"><FiInstagram/></a>
        <a href="https://twitter.com/KowalenkoTravis"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;2023 Travis Kowalenko</small>
      </div>
    </footer>
  )
}

export default Footer