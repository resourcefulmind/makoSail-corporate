import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { urlFor, client } from '../../client';
import './AquaticTestimonial.scss'

const AquaticTestimonial = () => {

  //state for index of current testimonial being viewed
  const [currentIndex, setCurrentIndex] = useState(0);
  const [brands, setBrands] = useState([]);
  const [aquaTestimonials, setAquaTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "aquaTestimonials"]';
    const brandsQuery = '*[_type == "brands"]';
  
    client.fetch(query)
      .then((data) => {

        setAquaTestimonials(data);
      })

      client.fetch(brandsQuery)
        .then((data) => {
          setBrands(data);
        })
  }, [])

  return (
    <div className='makosail__aqua__testimonial const-testimonial-margin' id='const-what-people-say'>
      <h4 className="testimonial__heading__text">MakoSail <span className='gradient__text'>Swimming Academy</span> Testimonials</h4>
      <>
        {aquaTestimonials.length && (
          <>
            <div className='makosail__aqua__testimonial-item app__flex'>
              <img src={urlFor(aquaTestimonials[currentIndex].imgurl)} alt={aquaTestimonials[currentIndex].name} />
              <div className="makosail__aqua__testimonial-content">
                <p className="p-text">{aquaTestimonials[currentIndex].feedback}</p>
                <div>
                  <h4 className="bold-text">{aquaTestimonials[currentIndex].name}</h4>
                  <h5 className="p-text">{aquaTestimonials[currentIndex].company}</h5>
                </div>
              </div>
            </div>

            <div className="makosail__aqua__testimonial-btns app__flex">
              <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? aquaTestimonials.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>
              <div className="app__flex" onClick={() => handleClick(currentIndex ===  aquaTestimonials.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>
          </>
        )}

        <div className="makosail__aqua__testimonial-brands app__flex">
          {brands.map((brand) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: 'tween' }}
              key={brand._id}
            >
              <img src={urlFor(brand.imgUrl)} alt={brand.name} />
            </motion.div>
          ))}
        </div>
      </>
    </div>
  )
}

export default AquaticTestimonial
