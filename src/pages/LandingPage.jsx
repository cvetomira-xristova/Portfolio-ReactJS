import { Button, Container, Typography } from '@mui/material';
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
          <Typography variant='h6'>
            lalalalalalalalalalalallalalalallala
          </Typography>
        </div>
        <div>
          <Button
            variant='outlined'
            className='h-10'
            onClick={() => scrollToSection('projects-section')}
          >
            Check out my most recent work
          </Button>
        </div>
      </div>

      <div id='projects-section' className='bg-gray-300 h-screen'>
        Projects
      </div>
    </>
  );
}
