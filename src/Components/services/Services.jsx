import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'



const Services = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className='service___list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Plan and implement new designs</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Optimize existing user interface designst is a long established fact that a reader will be distract</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Test for intuitivity and experience</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Communicate with clients to understand their business goals and objectivesIt is a</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Develop technical and business requirements and always strive to deliver intuitive and user-centered 
              
            </p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>
              Test new ideas before implementing 
            </p>
          </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service___list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Write well designed, testable, efficient code by using best software development practices</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Gather and refine specifications and requirements based on technical needs</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Solution-oriented and high-level programming skills</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Ability to troubleshoot and optimize web pages for security and responsiveness</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Proficiency in programming languages</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Cooperate with web designers to match visual design intent</p>
          </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Database Developer</h3>
          </div>

          <ul className='service___list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Good communication skills, both oral and written.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>In-depth understanding of modern database and information technologiesStrong analytical skillsIt.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Ability to compile and organize findings and data retrieved before presenting it to management.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Understand the concepts of other programming languages</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Ability to analyze, interpret, and organize large amounts of data.</p>
          </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services