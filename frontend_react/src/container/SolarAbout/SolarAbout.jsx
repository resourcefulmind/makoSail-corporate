import React from 'react';
import makosailsolarbg1 from '../../assets/makosailsolarbg1.mov';
import makosailsolarbg2 from '../../assets/makosailsolarbg2.mov';

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
      <div className='video-background'>
        <video playsInline autoPlay muted loop poster='../../assets/makosailsolarbg.png' id='bgvid'>
          <source src={makosailsolarbg1} type='video/mp4'/>
          <source src={makosailsolarbg2} type='video/mov'/>
        </video>
        <header className='makosail__video-header'>
          <h1>Makosail, The Zenith Of Quality With<span>Zero-Gap Technology</span></h1>
        </header>
      </div>
    </div>
)
}

export default SolarAbout;