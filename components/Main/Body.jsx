import React from 'react' 
import Hero from './HomeSections/Hero'; 
import WhatWeDo from './HomeSections/WhatWeDo';
import OurWork from './HomeSections/OurWork';
import WorksFast from './HomeSections/WorksFast';
import SimpleStep from './HomeSections/SimpleStep';
import ProjectType from './HomeSections/ProjectType';
import CreativeSolution from './HomeSections/CreativeSolution'; 
import HomeTestimonial from './HomeSections/HomeTestimonial';
import HomeCta from './HomeSections/HomeCta';
import HomeForm from './HomeSections/HomeForm';

export default function Body() {


  return (
    <>
      <Hero />
      <WhatWeDo />
      <OurWork /> 
      <WorksFast />
      <SimpleStep />
      <ProjectType />
      <CreativeSolution /> 
      <HomeTestimonial />
      <HomeCta />
      <HomeForm />
    </>
  );
}
