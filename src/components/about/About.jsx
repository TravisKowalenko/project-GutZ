import React from 'react'
import './about.css'
import ME from '../../assets/fatherson2.jpg'
import {MdFamilyRestroom} from 'react-icons/md'
import {MdBoy} from 'react-icons/md'
import {MdGirl} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
    <h5>Get to know</h5>  
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="father and son"/>
        </div>
      </div>

      <div className='about__content'>
        <div className="about__cards">
          <article className='about__card'>
            <MdFamilyRestroom className='about__icon'/>
            <h5>Father</h5>
            <small>11 + years</small>
          </article>

          <article className='about__card'>
            <MdBoy className='about__icon'/>
            <h5>Boys</h5>
            <small>2</small>
          </article>

          <article className='about__card'>
            <MdGirl className='about__icon'/>
            <h5>girls</h5>
            <small>2</small>
          </article>
        </div>

        <p>
        As you can tell being a father is my pride and happiness. 4 Children may seem like a big job but with kids
        as great as mine everyday has been a new journey that pushes me to be the best version of myself possible!
        We spend our days practicing our illustrating skills, exercising, watching our favourite anime ChainsawMan and reading various Manga.
        </p>

        <a href='#contact' className='btn btn-primary'>Want To Talk?</a>
      </div>
    </div>
    </section>
  )
}

export default About