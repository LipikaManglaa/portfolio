import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './../styles/Header.css'
import '../styles/About.css'
import aboutImg from '../assets/profile.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    let {pathname} =useLocation()

   
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
                        <li><Link to={'/'} className={(pathname=='/') ? 'activeMenu' : " " }>About</Link></li>
                        <li><Link to={'/portfolio'} className={(pathname=='/portfolio') ? 'activeMenu' : " " }>Portfolio</Link></li>
                        <li><Link to={'/contact'} className={(pathname=='/contact') ? 'activeMenu' : " " }>Contact Us</Link></li>
                        <li><Link to={'/resume'} className={(pathname=='/resume') ? 'activeMenu' : " " }>Resume</Link></li>
                      
                        <li><Link to="tel:0425652303"><FontAwesomeIcon icon={faPhone} />0425652303</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        <section id="about">
            <h3>About Me</h3>
            <div class="about-inner">

                <figure>
                    <Link >  <img src={aboutImg} alt="About" title="About"  /></Link>
                </figure>
                <div class="about-content pt-4">
                    <h2>Full Stack Web Developer</h2>
                    <p>Hi, My name is Lipika I've done my masters in computer science back in India after that I moved to Australia for better life .Then i was bust for settling life .After that, I was busy in home management And  in May 23 I've started Mern tack from Monash University coding bootcamp</p>
                    
                </div>
            </div>
        </section>
      </>
  )
}
