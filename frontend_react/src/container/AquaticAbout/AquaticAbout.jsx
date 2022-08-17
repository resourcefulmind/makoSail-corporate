import React from 'react';
import { Feature } from '../../components';

import './AquaticAbout.scss';

const AquaticAbout = () => {
  return (
    <div className='makosail__aquatic__about section__margin' id='about'>
      <div className="makosail__aquatic__about-feature">
        <Feature title="Our Philosophy" text="Every square inch of our unique facility is designed to improve learning, fun and safety for every child and parent who joins the Swim Academy family. You feel it the moment you walk in. Something else. It's more than just vivid colors that inspire kids. More than a curriculum designed not only to teach children to swim, but also to build their character through guided play. More than a thrill-free swimming pool. There is more. Something unexpected. Something that drives Swim Academy school beyond the usual."/> 
      </div>
      <div className="makosail__aquatic__about-heading">
        <h1 className="gradient__text">You Should Choose Us</h1>
        <p>Passionate Character Building, One Stroke at a Time</p>
      </div>
      <div className="makosail__aquatic__about-container">
        <Feature title="Experienced Staff" text=" We understand that as a parent, your child's safety is paramount. At Swim Academy, we believe your swimmers deserve to be in the best hands at all times, which is why our instructors go through an extensive recruitment process and a comprehensive training period." />
        <Feature title="Full Development" text="The priority in our school is taking care of the health and safety of users and learning through fun. That is why parents are so eager to enroll their children in our school. We participate in various courses and learn about new trends in swimming teaching."/>
        <Feature title="Modern Methods" text="We all have one thing in common: a passion for sport and a unique approach. We organize new types of pool activities. We work with pure passion for sport and the desire to promote an active lifestyle."/>
        <Feature title="Unique School" text="We want to change the approach of children and their parents to learning to swim. Our teachers are in the water with their students, figuring out what each kid needs to learn."/>
      </div>
    </div>
  )
}

export default AquaticAbout;
