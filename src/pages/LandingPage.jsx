import { Button, Container, Typography, Link } from '@mui/material';
import React from 'react';
import { scrollToSection } from '../utils/common';

export default function LandingPage() {
  return (
    <>
      <div className='bg-gray-200 h-screen flex flex-col items-center	justify-center '>
        <div>
          <Typography variant='h3'>Hi, I'm Tsvetomira</Typography>
        </div>
        <div>
          <Typography variant='h6'>A product designer and developer</Typography>
        </div>
        <div>
          <Link
            className='h-10 hover:cursor-pointer'
            onClick={() => scrollToSection('projects-section')}
          >
            <Typography>Check out my most recent work</Typography>
          </Link>
        </div>
      </div>

      <div id='projects-section' className='bg-gray-300 h-screen'>
        Projects
      </div>
    </>
  );
}
