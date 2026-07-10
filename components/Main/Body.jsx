import React from 'react' 
import Hero from './HomeSections/Hero'; 
import WhatWeDo from './HomeSections/WhatWeDo';
import OurWork from './HomeSections/OurWork';
import WorksFast from './HomeSections/WorksFast';
import SimpleStep from './HomeSections/SimpleStep';
import ProjectType from './HomeSections/ProjectType';
import CreativeSolution from './HomeSections/CreativeSolution';

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
    </>
  );
}
