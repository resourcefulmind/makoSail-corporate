import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { urlFor, client } from '../../client';
import './TechTestimonial.scss'

const TechTestimonial = () => {
    //state for index of current testimonial being viewed
  const [currentIndex, setCurrentIndex] = useState(0);
  const [brands, setBrands] = useState([]);
  const [techTestimonials, setTechTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "techTestimonials"]';
    const brandsQuery = '*[_type == "brands"]';
  
    client.fetch(query)
      .then((data) => {

        setTechTestimonials(data);
      })

      client.fetch(brandsQuery)
        .then((data) => {
          setBrands(data);
        })
  }, [])


    return (
        <div className="tech-testimonial-wrapper">
            <section className="tech-testimonial-container">
                <div className="tech-testimonial-content-container">
                    {techTestimonials.length && (
                        <>
                            <div className="tech-testimonial-content-container-two">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                <p>{techTestimonials[currentIndex].feedback}</p>
                                <span></span>
                                <h2>{techTestimonials[currentIndex].name}</h2>
                                <p className="last-paragraph">{techTestimonials[currentIndex].company}</p>
                            </div>

                            <div className="makosail__solar__testimonial-btns app__flex">
                                <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? techTestimonials.length - 1 : currentIndex - 1)}>
                                    <HiChevronLeft />
                                </div>
                                <div className="app__flex" onClick={() => handleClick(currentIndex ===  techTestimonials.length - 1 ? 0 : currentIndex + 1)}>
                                    <HiChevronRight />
                                </div>
                            </div>
                        </>
                    )}

                    <div className="makosail__solar__testimonial-brands app__flex">
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
                </div>
            </section>
        </div>
    )
}

export default TechTestimonial;