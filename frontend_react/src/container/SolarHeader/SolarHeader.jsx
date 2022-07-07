import React from 'react'

import './SolarHeader.scss'

const SolarHeader = () => {
  return (
    <div id='solar'>
      <div className="makosail__solar__hero">
        <div className="makosail__solar__hero-overlay">
          <div className="makosail__solar__hero-text_wrapper">
            <p className='makosail__solar__hero-subtitle-one'>MakoSail Renewable Energy Solutions</p>
            <h1 className="makosail__solar__hero-title">
              Harness the power of the sun, <br /> Produce clean energy from your roof.
            </h1>
            <p className="makosail__solar__hero-subtitle">
             We offer the best solar panels survey, installation and maintenance services for your homes and businesses.
            </p>
            <a href="#solar-project-highlights" className='btn-1'>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolarHeader