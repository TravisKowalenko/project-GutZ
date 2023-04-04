import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/chainsawman.jpg'
import IMG2 from '../../assets/topgemmett.jpg'
import IMG3 from '../../assets/Avatar2allyson.jpg'
import IMG4 from '../../assets/encantolivi.jpg'
import IMG5 from '../../assets/pulpdad.jpg'
import IMG6 from '../../assets/mandofam.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'ChainsawMan- Liams favourite!',
  },

  {
    id: 2,
    image: IMG2,
    title: 'Top Gun Maverick- Emmetts favourite!',
  },

  {
    id: 3,
    image: IMG3,
    title: 'Avatar 2: The Way of Water- Allysons favourite! ',
  },

  {
    id: 4,
    image: IMG4,
    title: 'Encanto- Olivias favourite!',
  },

  {
    id: 5,
    image: IMG5,
    title: 'Pulp Fiction- Dads favourite!',
  },

  {
    id: 6,
    image: IMG6,
    title: 'The Mandalorian- Family Favourite!',
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Our Favourite</h5>
      <h2>Shows/Movies</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio