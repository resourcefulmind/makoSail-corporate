import React from 'react'

import './ConstructionHeader.scss'

const ConstructionHeader = () => {
  return (
    <div id='construction'>
      <div className="makosail__construction__hero">
        <div className="makosail__construction__hero-overlay">
          <div className="makosail__construction__hero-text_wrapper">
            <h1 className="makosail__construction__hero-title">
              MakoSail Construction, A Leading Engineering Company In Nigeria
            </h1>
            <p className="makosail__construction__hero-subtitle">
              We provide simple and innovative solutions to deliver complex projects on time
            </p>
            <a href="#const-project-highlights" className='btn-1'>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConstructionHeader