import * as React  from 'react';
import { useEffect, useState } from 'react';
import { MdOutlineGppGood } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";

import { urlFor, client } from '../../client';
import './AquaticWork.scss'

const AquaticWork = () => {

  //state for index of current testimonial being viewed
  const [currentIndex, setCurrentIndex] = useState(0);
  const [aquaCarousel, setAquaCarousel] = useState([]);


  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "aquaCarousel"]';
  
    client.fetch(query)
      .then((data) => {

      setAquaCarousel(data);
    })

  }, [])

  return (
    <div className='makosail__aquatic__work'>
      <div className='makosail__aquatic__content-container'>
        <div className='content-text-container'>
          <h5 className='gradient__text'>Join Today</h5>
          <h2>MakoSail Swim Academy <br /> Invites You to Classes</h2>
          <p>We are an open and friendly swimming school. Each of our little floats is special and unique to us. We know each of our students not only by name, but most of all we listen to them and try to get to know them well. We teach swimming, but also try to pass on moral principles and values.</p>
          <div className="list-container">
            <ul>
              <li><span><MdOutlineGppGood /></span>Modern methods</li>
              <li><span><MdOutlineGppGood /></span>15 years on the market</li>
              <li><span><MdOutlineGppGood /></span>Affordable Payment Plans</li>
            </ul>
            <ul className='list-two'>
              <li><span><MdOutlineGppGood /></span>Personal Development</li>
              <li><span><MdOutlineGppGood /></span>Modern Equipment</li>
              <li><span><MdOutlineGppGood /></span>Introductory lesson</li>
            </ul>
         </div>
        </div>
        <div className="carousel-container">
          {aquaCarousel.length && ( 
            <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              <SwiperSlide className='image-container'><img src={urlFor(aquaCarousel[currentIndex].imgurl)} alt={aquaCarousel[currentIndex].name} /></SwiperSlide>
              <SwiperSlide className='image-container'><img src={urlFor(aquaCarousel[currentIndex + 1].imgurl)} alt={aquaCarousel[currentIndex + 1].name} /></SwiperSlide>
              <SwiperSlide className='image-container'><img src={urlFor(aquaCarousel[currentIndex + 2].imgurl)} alt={aquaCarousel[currentIndex + 2].name} /></SwiperSlide>
              <SwiperSlide className='image-container'><img src={urlFor(aquaCarousel[currentIndex + 3].imgurl)} alt={aquaCarousel[currentIndex + 3].name} /></SwiperSlide>
              <SwiperSlide className='image-container'><img src={urlFor(aquaCarousel[currentIndex + 4].imgurl)} alt={aquaCarousel[currentIndex + 4].name} /></SwiperSlide>
              <SwiperSlide className='image-container'><img src={urlFor(aquaCarousel[currentIndex + 5].imgurl)} alt={aquaCarousel[currentIndex + 5].name} /></SwiperSlide>
              <SwiperSlide className='image-container'><img src={urlFor(aquaCarousel[currentIndex + 6].imgurl)} alt={aquaCarousel[currentIndex + 6].name} /></SwiperSlide>
              <SwiperSlide className='image-container'><img src={urlFor(aquaCarousel[currentIndex + 7].imgurl)} alt={aquaCarousel[currentIndex + 7].name} /></SwiperSlide>
              <SwiperSlide className='image-container'><img src={urlFor(aquaCarousel[currentIndex + 8].imgurl)} alt={aquaCarousel[currentIndex + 8].name} /></SwiperSlide>
            </Swiper>
          </>
          )}
          
        </div>
      </div>
      <p className='foot-note-paragraph'><span className='gradient__text'><a href="tel:+">Call Us</a></span> or <span className='gradient__text'> <a href="#contact-us">Leave us a Message</a></span> to discuss the best swimming classes and register your children.</p>
    </div>
  )
}

export default AquaticWork