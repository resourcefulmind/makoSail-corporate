# makoSail-corporate

Backend - Sanity.io

Frontend - React

Frontend React dependencies:

1. @sanity/client
2. @sanity/image-url
3. framer-motion
4. node-sass
5. react-icons

File/folder Structure:

- components: This contains the smaller components.

- assets: This contains all of the images and media for the project.

- constants: This contains inputs for all of the files that are constantly used.

- container: This contains all of the bigger containers i.e components containing multiple components inside themselves. Each container item will be a folder and the accompanying jsx and scss file.

        <Header />
        <About />
        <Subsidiaries />
        <MeetTheCEO>
        <Skills Team/>
        <SolarHeader>
        <SolarAbout>
        <SolarProjects>
        <Testimonial />
        <AquaticsHeader>
        <AquaticsAbout>
        <AquaticsProjects>
        <AquaticsTeam>
        <AquaticsTestimonial>
        <TechHeader>
        <TechAbout>
        <TechTestimonial>
        <Footer />

- Importing every single image asset to be used, in the images.js file and then exporting them so that it can be easily imported in one line with a meaningful name.

- BEM is simply a frontend naming method.