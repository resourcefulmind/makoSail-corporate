import React from 'react'

import './ConstructionAbout.scss'

const ConstructionAbout = () => {
  return (
    <div id='construction_about construction__img-container'>
      <div className="makosail__construction__about__hero">
        <div className="makosail__construction__about__hero-overlay">
          <div className="makosail__construction__about__hero-text_wrapper">
            <h1 className="makosail__construction__about__hero-title">
              Partner With Us
            </h1>
            <p className="makosail__construction__about__hero-subtitle">
              As an apex construction company, MakoSail offers procurement management services nationwide. We have set our ideal standards with a firm belief in win-win partnerships with our vendors and supplier partners across the globe, and building sustainable as well as long-term relationships for value creation in supply chain process. We have expertise in executing large and complex urban and industrial infrastructure projects.
            </p>
            <a href="#construction_projects" className='btn-2'>What Our Clients Say</a>
            <a href="#contact_us" className='btn-2 btn-2-space'>Get a Quote</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConstructionAbout