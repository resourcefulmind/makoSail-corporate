import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';


import './SolarProjects.scss'
import { urlFor, client } from '../../client';


const SolarProjects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y:0, opacity: 1 });
  const [solarProjects, setSolarProjects] = useState([]);
  const [filterSolarProjects, setFilterSolarProjects] = useState([]);

  // fetch project items so as to be able to loop over project items
  useEffect(() => {
    const query = '*[_type == "solarProjects"]';

    client.fetch(query)
      .then((data) => {
        setSolarProjects(data);
        setFilterSolarProjects(data);
      })
  }, [])
  

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y:100, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y:0, opacity: 1 }])

      if(item === 'All') {
        setFilterSolarProjects(solarProjects);
      } else {
        setFilterSolarProjects(solarProjects.filter((solarProjects) => solarProjects.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <div className='makosail__solar__projects' id='const-project-highlights'>
            <>
                <h2 className="makosail__solar__projects__head-text">MakoSail <span className='gradient__text'>Solar Project</span> Highlights</h2>
                <div className="makosail__solar__projects-filter">
                  {['Installation', 'Maintenance', 'Survey', 'All'].map((item, index) => (
                    <div
                      key={index} 
                      onClick={() => handleProjectFilter(item)} 
                      className={`makosail__solar__projects-filter-item app__flex makosail__solar__filter-text ${activeFilter === item ? 'item-active' : ''} `}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <motion.div
                  animate={animateCard} 
                  transition={{ duration: 0.5, delayChildren: 0.5 }} 
                  className="makosail__solar__projects-portfolio"
                >
                  {filterSolarProjects.map((solarProjects, index) => (
                      <div className='makosail__solar__projects-item app__flex' key={index}>
                        <div className="makosail__solar__projects-img app__flex">
                          <img src={urlFor(solarProjects.imgUrl)} alt={solarProjects.name} />


                          <motion.div
                            whileHover={{opacity: [0, 1]}} 
                            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }} 
                            className="makosail__solar__projects-hover app__flex" 
                          >
                            <a href={solarProjects.projectLink} target="_blank" rel="noreferrer">
                              <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.9] }} 
                                transition={{ duration: 0.25 }} 
                                className="app__flex"
                              >
                                <AiFillEye />
                              </motion.div>
                            </a>
                            <a href={solarProjects.codeLink} target="_blank" rel="noreferrer">
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

                        <div className="makosail__solar__projects-content app__flex">
                          <h4 className="bold-text">{solarProjects.title}</h4>
                          <p className="p-text" style={{marginTop: 10}}>{solarProjects.description}</p>

                          <div className="makosail__solar__projects-tag app__flex">
                            <p className="p-text">{solarProjects.tags[0]}</p>
                          </div>
                        </div>
                      </div>
                  ))}
                </motion.div>
            </>
    </div>
  )
}

export default SolarProjects;
