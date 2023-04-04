import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/meem.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Travis Kowalenko</h1>
        <h5 className="text-light">Future Developer</h5>
        <CTA />
        <HeaderSocial />


        <div className='me'>
          <img src={ME} alt='Father and Son' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
export default Header