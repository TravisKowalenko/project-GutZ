import React from 'react'
import './children.css'
import AVTR1 from '../../assets/allysonprof.jpg'
import AVTR2 from '../../assets/Emmettprof.jpg'
import AVTR3 from '../../assets/oliviaprof.jpg'
import AVTR4 from '../../assets/Liamprof.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data= [
  {
    avatar: AVTR1,
    name: 'Allyson',
    review: 'Allyson is the oldest at 11 years old. She loves to sketch, paint, draw with alcohol markers, various crafts and enjoys playing on her computer with school friends.'
  },
  {

    avatar: AVTR2,
    name: 'Emmett',
    review: 'Emmett is the second oldest at 9. He is a future pilot for the navy and you can find him either reading various books/manga or in his VR flight lessons logging flight time. '
  },
  {
    avatar: AVTR3,
    name: 'Olivia',
    review: 'Olivia is the third oldest at 8 years old. She loves everything and everyone, Olivia can usually be found coloring, snuggling up to the animals or watching her favourite Kid Youtubers.'
  },
  {
    avatar: AVTR4,
    name: 'Liam',
    review: 'liam is the 4th oldest at 6 years old. He is obsessed with the manga and anime Chainsaw Man, Attack on Titan and DragonballZ, he also loves exercising with Dad and participates in multiple sports.'
  },
]

const Children = () => {
  return (
    <section id='children'>
      <h5>These Are My</h5>
      <h2>Children</h2>

      <Swiper className="container children__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="childs">
                <div className="child__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='child__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }     
      </Swiper>
    </section>
  )
}

export default Children