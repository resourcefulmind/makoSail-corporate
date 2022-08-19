import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

import './AquaticTeam.scss';  
import { urlFor, client } from '../../client';

const AquaticTeam = () => {
  const [aquaTeam, setAquaTeam] = useState([]);

    useEffect(() => {
      const query = '*[_type == "aquaTeam"]';

      client.fetch(query)
        .then((data) => setAquaTeam(data))
    }, [])
  return (
    <div className='makosail__aquatic__team section__margin'>
            <>
                <h2 className="head-text">Meet The <span className='gradient__text'>Swimming Academy </span>Team</h2>
                <p className='makosail__aquatic__team__intro-paragraph'>Our school currently has over a dozen qualified swimming instructors. We all have one thing in common: a passion for sport and a unique approach to children.</p>
                <div className="makosail__aquatic__team__profiles">
                    {aquaTeam.map((aquaTeam, index) => (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            className="makosail__aquatic__team__profile-item"
                            key={aquaTeam.title + index}

                        >
                            <img src={urlFor(aquaTeam.imgUrl)} alt={aquaTeam.title} />
                            <h2 className="bold-text" style={{ marginTop: 20 }}>{aquaTeam.title}</h2>
                            <p className="p-text" style={{ marginTop: 10 }}>{aquaTeam.description}</p>
                        </motion.div>
                    ))}
                </div>
            </>
        </div>
  )
}

export default AquaticTeam
