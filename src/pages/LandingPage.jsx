import { Typography } from '@mui/material';
import React from 'react';
import { scrollToSection } from '../utils/common';
import ProjectItem from '../components/ProjectItem';

import projectsData from '../api/db';

export default function LandingPage() {
  return (
    <>
      <div className='bg-gray-100 h-screen flex flex-col items-center	justify-center '>
        <div>
          <Typography variant='h3'>Hi, I'm Tsvetomira</Typography>
        </div>
        <div>
          <Typography variant='h6'>A product designer and developer</Typography>
        </div>
        <div>
          <a
            className='h-10 hover:cursor-pointer'
            onClick={() => scrollToSection('projects-section')}
          >
            <Typography className='text-rose-400 hover:text-rose-500'>
              Check out my most recent work
            </Typography>
          </a>
        </div>
      </div>

      {/* TODO: Fix Fonts */}

      <div id='projects-section' className='bg-gray-100 pt-20'>
        <Typography
          variant='subtitle1'
          className='pb-4'
          //  className='uppercase'
        >
          My Recent Work
        </Typography>

        {projectsData.map((project) => (
          <ProjectItem
            imageSrc={project.imageSrc}
            name={project.name}
            description={project.description}
            bgColor={'#E6D9EA'}
          />
        ))}
      </div>
    </>
  );
}
