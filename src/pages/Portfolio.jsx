import React from 'react'
import Layout from '../layout/Layout'
import postfolio2 from './../assets/portfolio-2.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './../styles/Portfolio.css'
export default function Portfolio() {
  return (
    <>
      <Layout>

        <section >
          <div className="container-fluid">
            <div className="container portDtaa">
              <div className="row">
                <div className="col-lg-12 p-3">
                  <div className="text-center ">
                    <h2 className="fs-35 fw-600 hcolor pt-2">Portfolio</h2>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 col-12'>
                  <div className='port-list'>
                    <div className='portfolio-head'>
                     <h4>HTML/HTML5</h4>
                      <div class="social-link-items social-port">
                        <Link to={'https://github.com/LipikaManglaa/HTML-Project'} target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
                      </div>
                    </div>
                  </div>

                </div>
                <div className='col-md-6 col-12'>
                  <div className='port-list'>
                    <div className='portfolio-head'>
                     <h4>BootStrap</h4>
                      <div class="social-link-items social-port">
                        <Link to={'https://github.com/LipikaManglaa/bootstrap-project'} target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
                      </div>
                    </div>
                  </div>

                </div>
                <div className='col-md-6 col-12'>
                  <div className='port-list'>
                    <div className='portfolio-head'>
                     <h4>Javascript</h4>
                      <div class="social-link-items social-port">
                        <Link to={'https://github.com/LipikaManglaa/Javascriipt-project'} target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
                      </div>
                    </div>
                  </div>

                </div>
                <div className='col-md-6 col-12'>
                  <div className='port-list'>
                    <div className='portfolio-head'>
                     <h4>Tailwind</h4>
                      <div class="social-link-items social-port">
                        <Link to={'https://github.com/LipikaManglaa/tailwind-projects.git'} target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
                      </div>
                    </div>
                  </div>

                </div>
                <div className='col-md-6 col-12'>
                  <div className='port-list'>
                    <div className='portfolio-head'>
                     <h4>React</h4>
                      <div class="social-link-items social-port">
                        <Link to={'https://github.com/LipikaManglaa/react-projects.git'} target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  )
}
