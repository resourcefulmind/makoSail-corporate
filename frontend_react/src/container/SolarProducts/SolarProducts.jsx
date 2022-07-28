import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';


import { urlFor, client } from '../../client';
import '../SolarProducts/SolarProducts.scss';

const SolarProducts = () => {
    //state for index of current solar__products being viewed
  const [currentIndex, setCurrentIndex] = useState(0);
  const [solarProducts, setSolarProducts] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "solarProducts"]';
  
    client.fetch(query)
      .then((data) => {

        setSolarProducts(data);
      })

  }, [])


  return (
    <div className='makosail__solar__products const-solar__products-margin' id='const-what-people-say'>
        <h1 className='seller-heading'>Our Best Sellers</h1>
      <>
        {solarProducts.length && (
          <>
            <div className='makosail__solar__products-item app__flex'>
              <img src={urlFor(solarProducts[currentIndex].imgurl)} alt={solarProducts[currentIndex].name} />
              <div className="makosail__solar__products-content">
                    <div>
                    <h3 className="bold-text">{solarProducts[currentIndex].name}</h3>
                    <h5 className="p-text"><span>MODEL: </span>{solarProducts[currentIndex].model}</h5>
                    <hr />
                    <h5 className="p-text">{solarProducts[currentIndex].description}</h5>
                    <hr />
                    </div>
                    <div>
                        <h5>Nominal Power</h5>
                        <p className="p-text">{solarProducts[currentIndex].nominalPower}</p>
                    </div>
                    <hr />
                    <div>
                        <h5>Efficiency</h5>
                        <p className="p-text">{solarProducts[currentIndex].efficiency}</p>
                    </div>
                    <hr />
                    <div>
                        <h5>Weight</h5>
                        <p className="p-text">{solarProducts[currentIndex].weight}</p>
                    </div>
                    <hr />
                    <div>
                        <h5>Maximum Voltage</h5>
                        <p className="p-text">{solarProducts[currentIndex].maximumVoltage}</p>
                    </div>
                    <hr />
                    <div>
                        <h5>Key Features</h5>
                        <p className="p-text">{solarProducts[currentIndex].keyFeatures}</p>
                    </div>
              </div>
            </div>

            <div className="makosail__solar__products-btns app__flex">
              <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? solarProducts.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>
              <div className="app__flex" onClick={() => handleClick(currentIndex ===  solarProducts.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>
          </>
        )}
      </>
    </div>
  )
}

export default SolarProducts;


