import React from 'react'

import { About, Footer, Header, Testimonial, AquaticAbout, AquaticHeader, AquaticTeam, AquaticTestimonial, AquaticWork, TechAbout, TechHeader, TechTestimonial, MeetTheCeo, SolarHeader, SolarAbout, SolarProjects, SolarTestimonial, ConstructionHeader, ConstructionAbout, ConstructionProjects, ConstructionTestimonials, OurTeam } from './container';
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
        <MeetTheCeo />
        <OurTeam />
        <ConstructionHeader />
        <ConstructionAbout />
        <ConstructionProjects />
        <ConstructionTestimonials />
        <SolarHeader />
        <SolarAbout />
        <SolarProjects />
        <SolarTestimonial />
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