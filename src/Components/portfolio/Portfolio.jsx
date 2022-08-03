/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Delivery App Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/14410296-Delivery-App'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Charts tempelate & infographics in figa',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18070485-Money-Manager-Expense-Manager-Dashboard'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17141026-Sociola-Management-Social-Media-Landing-page'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18070485-Money-Manager-Expense-Manager-Dashboard'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts tempelate & infographics in figa',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18070485-Money-Manager-Expense-Manager-Dashboard'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Charts tempelate & infographics in figa',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18070485-Money-Manager-Expense-Manager-Dashboard'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio___container">
       {
        data.map(({id, image, title, github, demo})=> {
          return(
             <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="porfolio__item-cta">
            <a href={github} className='btn' target='_blank' >Github</a>
            <a href={demo}
            className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio