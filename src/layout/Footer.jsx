import React from 'react'
import './../styles/Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <>
      <section id="footer">
            <div class="footer-inner">
                <div class="footer-about">
                    <h2>About US</h2>
                    <div class="footer-about-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maiores sint mollitia doloremque
                            nesciunt possimus a vel exercitationem! Sapiente voluptatum</p>
                    </div>
                </div>
                <div class="footer-link">
                    <h2>Quick Links</h2>
                    <ul>
                    <li><Link to={'/'}>About</Link></li>
                        <li><Link to={'/portfolio'}>Portfolio</Link></li>
                        <li><Link to={'/contact'}>Contact Us</Link></li>
                        <li><Link to={'/resume'}>Resume</Link></li>
                    </ul>
                </div>
                <div class="contact-link" id="contact-us">
                    <h2>Contact Us</h2>
                    <div class="contact-icon">
                        <i class="fas fa-phone"></i>
                        <span>+ 555 555 55 55</span>
                    </div>
                    <div class="contact-icon">
                        <i class="fas fa-envelope-open"></i>
                        <span>demo@gmail.com</span>
                    </div>
                    <div class="contact-icon">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Spencer Street, 704-705 Plot No.86, Sector-17 Vashi, Melbourne, 3000.</span>
                    </div>
                </div>
                <div class="social-link">
                    <h2>Social Media</h2>
                    <div class="social-link-icon">
                        <div class="social-link-items">
                        <Link to={'https://www.linkedin.com/in/lipikawebdeveloper/'}>   <FontAwesomeIcon icon={faLinkedinIn} className='icon'/>
                     </Link>
                        </div>
                        <div class="social-link-items">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                        </div>
                        <div class="social-link-items">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                        <div class="social-link-items"> <a href="#"><i class="fab fa-twitter"></i></a></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
