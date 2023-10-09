import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'
import aboutImg from './../assets/search-engine-optimization.jpg'

export default function About() {
  return (
   <>
   <Layout>
   <section id="about">
            <h3>About Us</h3>
            <div class="about-inner">

                <figure>
                    <Link >  <img src={aboutImg} alt="About" title="About" /></Link>
                </figure>
                <div class="about-content">
                    <h2>Full Stack Web Developer</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, numquam? Facere voluptatem
                        quibusdam repellendus odio expedita tempore necessitatibus deleniti molestiae quisquam</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, numquam? Facere voluptatem
                        quibusdam repellendus odio expedita tempore necessitatibus deleniti molestiae quisquam</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, numquam? Facere voluptatem
                        quibusdam repellendus odio expedita tempore necessitatibus deleniti molestiae quisquam</p>
                    
                </div>
            </div>
        </section>
    
    </Layout>
   
   </>
  )
}
