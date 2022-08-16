import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// import { images } from '../../constants'
import './OurTeam.scss'; 
import { urlFor, client } from '../../client';

// const team = [
//     { title: 'Elon Musk', description: 'CEO, MakoSail', imgUrl: images.about01 }, 
//     { title: 'Jeff Bezos', description: 'Chief Financial Officer', imgUrl: images.about02 }, 
//     { title: 'Mark Zuckerberg', description: 'Executive Director', imgUrl: images.about03 }, 
//     { title: 'Aliko Dangote', description: 'Head, Swimming Academy Instructors', imgUrl: images.about04 }, 
//     { title: 'Warren Buffet', description: 'Head of Marketing', imgUrl: images.about01 }
// ];

const OurTeam = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
      const query = '*[_type == "team"]';

      client.fetch(query)
        .then((data) => setTeam(data))
    }, [])
    

    return (
        <div className='makosail__team section__margin'>
            <>
                <h2 className="head-text">The <span className='gradient__text'>MakoSail</span> Team</h2>
                <p className='makosail__team__intro-paragraph'>Across Board, we have a strong history wherein we have delivered complex projects right on time without negotiating on quality. This has been achievable only because of our determined set of leaders.</p>
                <div className="makosail__team__profiles">
                    {team.map((team, index) => (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            className="makosail__team__profile-item"
                            key={team.title + index}

                        >
                            <img src={urlFor(team.imgUrl)} alt={team.title} />
                            <h2 className="bold-text" style={{ marginTop: 20 }}>{team.title}</h2>
                            <p className="p-text" style={{ marginTop: 10 }}>{team.description}</p>
                        </motion.div>
                    ))}
                </div>
            </>
        </div>
    )
}

export default OurTeam