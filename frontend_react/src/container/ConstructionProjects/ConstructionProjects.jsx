import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';


import './ConstructionProjects.scss';
import { urlFor, client } from '../../client';

const ConstructionProjects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y:0, opacity: 1 });
  const [makosail, setMakosail] = useState([]);
  const [filterMakosail, setFilterMakosail] = useState([]);

  // fetch project items so as to be able to loop over project items
  useEffect(() => {
    const query = '*[_type == "makosail"]';

    client.fetch(query)
      .then((data) => {
        setMakosail(data);
        setFilterMakosail(data);
      })
  }, [])
  

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y:100, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y:0, opacity: 1 }])

      if(item === 'All') {
        setFilterMakosail(makosail);
      } else {
        setFilterMakosail(makosail.filter((makosail) => makosail.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <div className='makosail__construction__projects' id='const-project-highlights'>
            <>
                <h2 className="makosail__construction__projects__head-text">Construction <span className='gradient__text'>Project</span> Highlights</h2>
                <div className="makosail__construction__projects-filter">
                  {['Residential', 'Industrial', 'Maintenance', 'All'].map((item, index) => (
                    <div
                      key={index} 
                      onClick={() => handleProjectFilter(item)} 
                      className={`makosail__construction__projects-filter-item app__flex makosail__construction__filter-text ${activeFilter === item ? 'item-active' : ''} `}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <motion.div
                  animate={animateCard} 
                  transition={{ duration: 0.5, delayChildren: 0.5 }} 
                  className="makosail__construction__projects-portfolio"
                >
                  {filterMakosail.map((makosail, index) => (
                      <div className='makosail__construction__projects-item app__flex' key={index}>
                        <div className="makosail__construction__projects-img app__flex">
                          <img src={urlFor(makosail.imgUrl)} alt={makosail.name} />


                          <motion.div
                            whileHover={{opacity: [0, 1]}} 
                            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }} 
                            className="makosail__construction__projects-hover app__flex" 
                          >
                            <a href={makosail.projectLink} target="_blank" rel="noreferrer">
                              <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.9] }} 
                                transition={{ duration: 0.25 }} 
                                className="app__flex"
                              >
                                <AiFillEye />
                              </motion.div>
                            </a>
                            <a href={makosail.codeLink} target="_blank" rel="noreferrer">
                              <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.9] }} 
                                transition={{ duration: 0.25 }} 
                                className="app__flex"
                              >
                                <AiFillGithub />
                              </motion.div>
                            </a>
                          </motion.div>
                        </div>

                        <div className="makosail__construction__projects-content app__flex">
                          <h4 className="bold-text">{makosail.title}</h4>
                          <p className="p-text" style={{marginTop: 10}}>{makosail.description}</p>

                          <div className="makosail__construction__projects-tag app__flex">
                            <p className="p-text">{makosail.tags[0]}</p>
                          </div>
                        </div>
                      </div>
                  ))}
                </motion.div>
            </>
    </div>
  )
}

export default ConstructionProjects