import React from 'react';
import { Feature } from '../../components';
import './About.scss';

const About = () => {
  return (
    <div className='makosail__about section__margin' id='about'>
      <div className="makosail__about-feature">
        <Feature title="Who We Are" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum iure soluta repellat a in ducimus fugiat ea quibusdam, excepturi amet voluptates id nesciunt, laboriosam consectetur sequi eligendi. Nobis, fuga. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus mollitia cupiditate blanditiis totam, voluptates corporis. Dolorum quas nisi, cupiditate officiis reiciendis iure, commodi, consequuntur corrupti sit in repellat dicta ex.
        Nesciunt quibusdam officiis repellendus nemo exercitationem itaque. Corporis magni dolorum ipsum magnam ipsa aperiam qui blanditiis amet commodi, nisi facere, numquam maxime omnis inventore, vel totam expedita nobis accusamus corrupti!
        Aliquam dicta provident esse cum eaque, non quis voluptas velit doloribus amet error, illo, tempora ullam praesentium quibusdam ratione laudantium modi accusantium facere ipsa dolorem. Praesentium delectus porro nihil magnam!
        Enim officiis quo nisi quaerat mollitia blanditiis voluptatem id sed quibusdam placeat maiores excepturi ipsa cum tempora, praesentium ut repellendus ab, minima atque eius. Aliquid corrupti quas illum velit architecto.
        Aliquam quibusdam dolores quo dolorum ea repudiandae odio id quis. Ad tempore excepturi, quam quos officiis, labore voluptates aut necessitatibus ipsa iure similique doloribus. Iure repellendus a excepturi repudiandae earum."/> 
      </div>
      <div className="makosail__about-heading">
        <h1 className="gradient__text">Our services affirm our commitment to client satisfaction</h1>
        <p>View Our Business Suite</p>
      </div>
      <div className="makosail__about-container">
        <Feature title="Construction and Engineering" text="We operate as one of Nigeria's foremost construction companies,offering procurement management services nationwide. We believe in win-win partnerships with our vendor and supplier partners, and building sustainable as well as long-term relationships for value creation in supply chain process." />
        <Feature title="Solar Installation and Maintenance" text="Our solar panel installations and maintenance services are low-profile and durable — quietly converting sunlight to energy for years to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic. Contact our energy advisor to ask any questions about our high-grade MakoSail solar panels."/>
        <Feature title="MakoSail Swimming Academy" text="We know life gets hectic, and raising little ones takes a village. That's why we're here, to come alongside you with flexible schedules and make-up lessons to fit your family's busy schedule. So sit back and relax. We create safe &amp; confident swimmers. For life. "/>
        <Feature title="MakoSail TechLabs Hub" text="MakoSail is on a mission to always find the most talented tech professionals in the world and deliver solid products to rapidly growing companies and businesses who recognize how valuable it is to exclusively work with tech stars."/>
      </div>
    </div>
  )
}

export default About;