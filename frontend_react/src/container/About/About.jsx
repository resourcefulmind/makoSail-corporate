import React from 'react';
import { Feature } from '../../components';
import './About.scss';

const About = () => {
  return (
    <div className='makosail__about section__margin' id='about'>
      <div className="makosail__about-feature">
        <Feature title="About MakoSail" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum iure soluta repellat a in ducimus fugiat ea quibusdam, excepturi amet voluptates id nesciunt, laboriosam consectetur sequi eligendi. Nobis, fuga."/>
      </div>
      <div className="makosail__about-heading">
        <h1 className="gradient__text">Our services affirm our commitment to client satisfaction</h1>
        <p>View Our Business Suite</p>
      </div>
      <div className="makosail__about-container">
        <Feature title="Construction" text="We are one of India\’s leading construction companies,offering procurement management services nationwide. We believe in win-win partnerships with our vendor and supplier partners, and building sustainable as well as long-term relationships for value creation in supply chain process." />
        <Feature title="Solar Installation &amp; Maintenance" text="Our solar panel installations and maintenance services are low-profile and durable — quietly converting sunlight to energy for years to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic. Contact our energy advisor to ask any questions about our high-grade MakoSail solar panels."/>
        <Feature title="MakoSail Swimming Academy" text="We know life gets hectic, and raising little ones takes a village. That\'s why we\'re here, to come alongside you with flexible schedules and make-up lessons to fit your family\'s busy schedule. So sit back and relax. We create safe &amp; confident swimmers. For life. "/>
        <Feature title="MakoSail TechLabs" text="MakoSail is on a mission to always find the most talented tech professionals in the world and deliver solid products to rapidly growing companies and businesses who recognize how valuable it is to exclusively work with tech stars."/>
      </div>
    </div>
  )
}

export default About