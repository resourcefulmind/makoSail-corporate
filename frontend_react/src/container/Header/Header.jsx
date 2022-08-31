import React from 'react';

import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  
  return (
    <div className='makosail__header section__padding'>
      <div className="makosail__header-content">
        <h1 className="gradient__text">Makosail, A Race To Innovate, a World of Rewarding Experiences. </h1>
        <p>The MakoSail Group of companies anticipate global world trends in all spheres of life. We believe it's important for everyone to have access and we encourage diversity. Join the thousands of African & Global households & enterprises, utilizing our suite of services.</p>

        <div className="makosail__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className="makosail__header-content__people">
          <img src={images.people} alt="people using makosail" />
          <p>Diverse clients from different parts of the world </p>
        </div>
      </div>

        <div className="makosail__header-image">
          <img src={images.ai} alt="makosail header" />
        </div>
    </div>
  )
}

export default Header


