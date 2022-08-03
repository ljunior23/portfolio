/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Mohammed ',
    review: 'Turns obstacles into challenges and then overcomes them. He is also one person that I has enconter who always meets or exceeds goals every time'
  },

  {
    avatar: AVTR2,
    name: 'Emmanuel Osie Tutu',
    review: 'Puts in extra time, energy, and effort to produce the highest-quality work. Strives to deliver more than whatever is expected'
  },
  {
    avatar: AVTR3,
    name: 'Komiljon Abdujabbarov',
    review: 'Has ongoing focus on accuracy. Maintains and delivers high quality level work'
  }
  ,
  {
    avatar: AVTR4,
    name: 'Gifty Ansah',
    review: 'Is one of the easiest people to work with. Builds collaboration among departments.'
  }
]



const testemonial = () => {
  return (
    <section id= 'testimonial'>
      <h5>Review from Collegues</h5>
      <h2>Testimoinal</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
         { 
          data.map(({avatar, name, review}, index)=>{
            return(
               <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name' >{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testemonial