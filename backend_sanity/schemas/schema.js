// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import testimonials from './testimonials'
import team from './team'
import brands from './brands'
import contact from './contact'
import makosail from './makosail'
import solarTeam from './solarTeam'
import solarProjects from './solarProjects'
import solarBrands from './solarBrands'
import solarTestimonials from './solarTestimonials'
import solarProducts from './solarProducts'
import aquaCarousel from './aquaCarousel'
import aquaClasses from './aquaClasses'
import aquaTeam from './aquaTeam'
import aquaTestimonials from './aquaTestimonials'
import techTestimonials from './techTestimonials'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    testimonials, 
    team, 
    brands, 
    contact, 
    makosail, 
    solarTeam, 
    solarProjects, 
    solarBrands, 
    solarTestimonials, 
    solarProducts, 
    aquaCarousel, 
    aquaClasses, 
    aquaTeam, 
    aquaTestimonials, 
    techTestimonials
  ]),
})
