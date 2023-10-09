import React from 'react'
import { Link } from 'react-router-dom'
import './../styles/Header.css'
import FontAwesomeIcon from '@fortawesome/fontawesome-svg-core'
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <>
   <header>
            <div class="header-inner">
                <div class="logo">
                    <h1>Portfolio</h1>
                </div>
                <div class="mobile-icon">
               
                <FontAwesomeIcon icon={faBars} />
                </div>
                <nav>
                    <ul>
                        <li><Link to={'/'}>About</Link></li>
                        <li><Link to={'/portfolio'}>Portfolio</Link></li>
                        <li><Link to={'/contact'}>Contact Us</Link></li>
                        <li><Link to={'/resume'}>Resume</Link></li>
                      
                        <li><Link to="tel:0425652303"><FontAwesomeIcon icon={faPhone} />0425652303</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
      </>
  )
}
