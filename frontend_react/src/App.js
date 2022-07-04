import React from 'react'

import { About, Footer, Header, AquaticAbout, AquaticHeader, AquaticTeam, AquaticTestimonial, AquaticWork, TechAbout, TechHeader, TechTestimonial, MeetTheCeo, SolarHeader, SolarAbout, SolarProjects, SolarTestimonial, ConstructionHeader, ConstructionAbout, ConstructionProjects, ConstructionTestimonials, OurTeam } from './container';
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
        <ConstructionProjects />
        <ConstructionAbout />
        <ConstructionTestimonials />
        <SolarHeader />
        <SolarAbout />
        <SolarProjects />
        <SolarTestimonial />
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