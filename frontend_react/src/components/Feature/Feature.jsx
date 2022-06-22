import React from 'react'

const Feature = ({ title, text }) => {
  return (
    <div className='makosail__features-container__feature'>
        <div className="makosail__features-container__feature-title">
            <div />
            <h1>{title}</h1>
        </div>
        <div className='makosail__features-container_feature-text'>
            {text}
        </div>
    </div>
  )
}

export default Feature