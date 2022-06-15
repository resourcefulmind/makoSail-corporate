import React, { useState } from 'react'
import { RiMenuFoldFill } from 'react-icons/ri'
import { HiX } from 'react-icons/hi'
import { motion } from "framer-motion"

import { images } from '../../constants';
import './Navbar.scss';


const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['Home', 'About MakoSail', 'Construction', 'Solar', 'Swimming Academy', 'Tech Hub', 'Contact Us'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Nav */}
      <div className="app__navbar-menu">
          <RiMenuFoldFill onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div 
              whileInView={{ x: [300, 0] }} 
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['Home', 'About MakoSail', 'Construction',  'Solar', 'Swimming Academy', 'Tech Hub', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
      </div>
        
    </nav>
  )
}

export default Navbar