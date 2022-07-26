import React from 'react';

import './SolarAbout.scss'

const SolarAbout = () => {
  return (
    <div className='makosail__solar__about' id='solar-project-highlights'>
      <div className='makosail__solar__about__content-container'>
        <div className='makosail__solar__about__heading-container'>
          <p>Design</p>
          <h1>Sleek and Durable</h1>
        </div>
        <div className='makosail__solar__about__text-container'>
          <p>Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic.  <a  className='solar_contact gradient__text' href='#contact_us' id='contact_us'>Chat with an energy advisor or</a> or <a className='solar_contact gradient__text' href="tel:+">request a call</a> to ask any questions about Makosail solar panels.</p>
        </div>
      </div>
    </div>
)
}

export default SolarAbout;