import React from 'react';
import kidswim from '../../assets/kidswim.mov';


import './AquaticHeader.scss'

const AquaticHeader = () => {
  return (
    <div className='makosail__aquatic__header' id='swim'>
      <div className='makosail__aquatic__video-background'>
        <video playsInline autoPlay muted loop poster='../../assets/aquaticheaderbg.jpg' id='bgvid'>
          <source src={kidswim} type='video/mp4'/>
          <source src={kidswim} type='video/mov'/>
        </video>
        <header className='makosail__aquatic__video-header'>
          <h1>Start a lifetime of <span>Water Adventures</span>at the MakoSail Swimming Academy</h1>
        </header> 
      </div>
    </div>
)
}

export default AquaticHeader;
