import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work, AquaticAbout, AquaticHeader, AquaticTeam, AquaticTestimonial, AquaticWork, TechAbout, TechHeader, TechTestimonial, MeetTheCeo, Subsidiaries, SolarHeader, SolarAbout, SolarProjects, SolarTestimonial, ConstructionHeader, ConstructionAbout, ConstructionProjects, ConstructionTestimonials } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='App header-section'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
        <About />
        <Subsidiaries />
        <MeetTheCeo />
        <ConstructionHeader />
        <ConstructionAbout />
        <ConstructionProjects />
        <ConstructionTestimonials />
        <SolarHeader />
        <SolarAbout />
        <SolarProjects />
        <SolarTestimonial />
        <Work />
        <Skills />
        <Testimonial />
        <AquaticHeader />
        <AquaticAbout />
        <AquaticWork />
        <AquaticTeam />
        <AquaticTestimonial />
        <TechHeader />
        <TechAbout />
        <TechTestimonial />
        <Footer />
    </div>
  );
}

export default App;