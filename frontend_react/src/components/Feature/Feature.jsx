import React from 'react';

import './Feature.scss';

const Feature = ({ title, text }) => {
  return (
    <div className='makosail__features-container__feature'>
        <div className="makosail__features-container__feature-title">
            <div />
            <h1>{title}</h1>
        </div>
        <div className='makosail__features-container__feature-text'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Feature