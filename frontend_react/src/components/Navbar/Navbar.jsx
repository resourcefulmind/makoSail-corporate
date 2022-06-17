import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import { RiMenuFoldFill } from 'react-icons/ri'
// import { HiX } from 'react-icons/hi'
// import { motion } from "framer-motion"
import { images } from '../../constants';
import './Navbar.scss';


const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">Who We Are</a></p>
    <p><a href="#construction">Construction</a></p>
    <p><a href="#solar">Solar</a></p>
    <p><a href="#swim">Swimming Academy</a></p>
    <p><a href="#tech">Tech Hub</a></p>
  </>
)

const Navbar = () => {
   const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="makosail__navbar">
      <div className="makosail__navbar-links">
        <div className="makosail__navbar-links_logo"> 
          <img src={images.makosail_makeshift_logo} alt="logo" />
        </div>
        <div className="makosail__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="makosail__navbar-sign">
        <p>Give Us A Call ?</p>
        <button type='button'>Contact Us</button>
      </div>
      <div className="makosail__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size = {27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && (
          <div className='makosail__navbar-menu_container scale-up-center'>
              <div className='makosail__navbar_container-links'>
                <Menu />
                <div className="makosail__navbar-menu_container-links-sign">
                  <p>Contact Us</p>
                  <button type='button'>Get a Quote</button>
                </div>
              </div>
          </div>
        ) }
      </div>
    </div>













    // <nav className='app__navbar'>
    //   <div className='app__navbar-logo'>
    //     <img src={images.logo} alt="logo" />
    //   </div>
    //   <ul className='app__navbar-links'>
    //     {['Home', 'About MakoSail', 'Construction', 'Solar', 'Swimming Academy', 'Tech Hub', 'Contact Us'].map((item) => (
    //       <li className='app__flex p-text' key={`link-${item}`}>
    //         <div />
    //         <a href={`#${item}`}>{item}</a>
    //       </li>
    //     ))}
    //   </ul>

    //   {/* Mobile Nav */}
    //   <div className="app__navbar-menu">
    //       <RiMenuFoldFill onClick={() => setToggle(true)} />

    //       {toggle && (
    //         <motion.div 
    //           whileInView={{ x: [300, 0] }} 
    //           transition={{ duration: 0.85, ease: 'easeOut' }}
    //         >
    //           <HiX onClick={() => setToggle(false)} />
    //           <ul>
    //             {['Home', 'About MakoSail', 'Construction',  'Solar', 'Swimming Academy', 'Tech Hub', 'Contact Us'].map((item) => (
    //               <li key={item}>
    //                 <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
    //               </li>
    //             ))}
    //           </ul>
    //         </motion.div>
    //       )}
    //   </div>
        
    // </nav>
  )
}

export default Navbar