// import React from 'react'
// import { motion } from 'framer-motion';

// import { images } from '../../constants';
// import './Header.scss';


// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1], 
//     opacity: [0, 1], 
//     transition: {
//       duration: 3, 
//       ease: 'easeInOut'
//     }
//   }
// }

// const Header = () => {
//   return (
//     <div id="home" className="app__header app__flex">
//       <motion.div
//         whileInView={{ x: [-100, 0], opacity: [0, 1] }}
//         transition={{ duration: 3 }}
//         className="app__header-info"
//       >
//         <div className="app__header-badge">
//           <div className="badge-cmp app__flex">
//             <span>👋</span>
//             <div style={{ marginLeft: 20 }}>
//               <h1 className='p-text-lg'>A Race To Innovate, </h1>
//               <h1 className='head-text'>a World of Rewarding Experiences</h1>
//               <h4 className=''>Construction, Energy, Health & Fitness, and a lot more. <br /> Begin a rewarding journey across all, on a single platform.</h4>
//             </div>
//           </div>

//           <div className="tag-cmp app__flex">
//             <p className="p-text">Clean, Renewable Energy Installations</p>
//             <p className="p-text">#1 Engineering Excellence</p>
//             <p className="p-text">Olympic Standard Programmes</p>
//             <p className="p-text">Cutting Edge Technology Solutions</p>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div 
//         whileInView={{ opacity: [0, 1] }}
//         transition={{ duration: 3, delayChildren: 3 }}
//         className="app__header-img"
//       >
//         <img src={images.profile} alt="profile_bg"/>
//         <motion.img
//             whileInView={{ opacity: [0, 1] }}
//             transition={{ duration: 6, ease: 'easeInOut' }}
//             src={images.circle}
//             alt="profile_circle"
//             className="overlay_circle"
//         />
//       </motion.div>

//       <motion.div 
//         variant={scaleVariants}
//         whileInView={scaleVariants.whileInView}
//         className="app__header-circles"
//       >
//         {[images.flutter, images.redux, images.sass].map((circle, index) => (
//           <div className="circle-cmp app__flex" key={`circle-${index}`}>
//             <img src={circle} alt="profile_bg"/>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   )
// }



import React from 'react';

// import { AppWrap } from '../../wrapper';
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


