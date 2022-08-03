import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './headerSocial'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello, my name is </h5>
            <h1>George Kumi Acheampong</h1>
            <h5 className="text-light">Student</h5>
            <CTA />
            <HeaderSocial />

            <div className="me">
              <img src={ME} alt='me'/>
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header