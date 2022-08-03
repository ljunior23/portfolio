/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {MdAddBusiness} from 'react-icons/md'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <MdAddBusiness className='about__icon'/>
                <h5>Companies</h5>
                <small>2+ WorldWide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>4 Completed</small>
            </article>
          </div>
          <p>
            Hardworking College Student seeking employment. Bringing forth a 
            motivated attitude and a variety of powerful skills. Committed to 
            utilizing my skills to further the mission of a company.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a> 
        </div>
      </div>
    </section>
  )
}

export default About