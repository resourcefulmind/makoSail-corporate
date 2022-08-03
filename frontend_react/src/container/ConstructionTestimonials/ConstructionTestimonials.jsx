import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { urlFor, client } from '../../client';
import './ConstructionTestimonials.scss'

const ConstructionTestimonial = () => {
  //state for index of current testimonial being viewed
  const [currentIndex, setCurrentIndex] = useState(0);
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
  
    client.fetch(query)
      .then((data) => {

        setTestimonials(data);
      })

      client.fetch(brandsQuery)
        .then((data) => {
          setBrands(data);
        })
  }, [])

  

  return (
    <div className='makosail__testimonial const-testimonial-margin' id='const-what-people-say'>
      <>
        {testimonials.length && (
          <>
            <h4 className="testimonial__heading__text">What <span className='gradient__text'>Our Customers</span> Are Saying</h4>
            <div className='makosail__testimonial-item app__flex'>
              <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
              <div className="makosail__testimonial-content">
                <p className="p-text">{testimonials[currentIndex].feedback}</p>
                <div>
                  <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                  <h5 className="p-text">{testimonials[currentIndex].company}</h5>
                </div>
              </div>
            </div>

            <div className="makosail__testimonial-btns app__flex">
              <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>
              <div className="app__flex" onClick={() => handleClick(currentIndex ===  testimonials.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>
          </>
        )}

        <div className="makosail__testimonial-brands app__flex">
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

export default ConstructionTestimonial;
