import React from 'react'

import './TechAbout.scss'

const TechAbout = () => {
  return (
    <div className='makosail__tech__about section__margin' id='tech-about'>
      <section>
        <div className="about-container">
          <div className="about-text-content">
            <h1 className='gradient__text'>We're the Whole Package</h1>
            <p className="about-text-content-paragraph">Successful product development requires a balanced approach. We blend personalized, in-depth technical guidance with our global scale. By leveraging Agile development methodologies, human-centered design tools, and best practices around security and risk management, Makosail Technologies help organizations meet their needs reliably and efficiently</p>
            <div className="first-div">
              <div className="inner-second-div"></div>
            </div>
          </div>
          <div className="about-hero-container">
            <div className="about-hero-content-container">
              <div className="svg-container">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="hero-content-text-container">
                <h2>PRODUCT IDEATION</h2>
                <p>Makosail transforms your business through technology. Our ideation process for your business will begin with the Scoping Session and Product Design Process, until Minimum Viable Product. </p>
                <a href='/' className="hero-content-button gradient__text">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="about-hero-content-container">
              <div className="svg-container">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="hero-content-text-container">
                <h2>PRODUCT DEVELOPMENT</h2>
                <p>Makosail operates in line with the best industry practices and specializes in Web Development, Mobile Development, Data Science, and UI/UX Design. We elevate your user experience with our services.</p>
                <a href='/' className="hero-content-button gradient__text">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="about-hero-content-container">
              <div className="svg-container">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="hero-content-text-container">
                <h2>PRODUCT IMPROVEMENT</h2>
                <p>We are committed to continuously improving the state of software even after it has been delivered to our clients by conducting periodic code and user experience audits. We keep your software running at its best.</p>
                <a href='/' className="hero-content-button gradient__text">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <button className="cta-button">Let's Discuss Your Idea</button>
        </div>
      </section>
    </div>
  )
}

export default TechAbout