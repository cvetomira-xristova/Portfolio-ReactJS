import { Button, Container, Typography, Link } from '@mui/material';
import React from 'react';
import { scrollToSection } from '../utils/common';
import ProjectItem from '../components/ProjectItem';
import { useTheme } from '@mui/material/styles';

import imageSrc1 from '../static/project1-img.png';
import imageSrc2 from '../static/project2-img2.png';
import imageSrc3 from '../static/project3-img.png';

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

      <div id='projects-section' className='bg-gray-100 pt-20 '>
        <Typography
          variant='subtitle1'
          //  className='uppercase'
          className='pb-4'
        >
          My Recent Work
        </Typography>
        <ProjectItem
          imageSrc={imageSrc1}
          name={'Project Name'}
          description={'This is a short decription of the project hihi'}
          bgColor={'indigo'}
          href={'project-name'}
        />
        <ProjectItem
          imageSrc={imageSrc2}
          name={'Project Name'}
          description={'This is a short decription of the project hihi'}
          bgColor={'blue'}
          href={'project-name2'}
        />
        <ProjectItem
          imageSrc={imageSrc3}
          name={'Project Name'}
          description={'This is a short decription of the project hihi'}
          bgColor={'indigo'}
          href={'project-name3'}
        />
      </div>
    </>
  );
}
