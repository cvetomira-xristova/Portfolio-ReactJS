import { Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { scrollToSection } from '../utils/common';
import ProjectItem from '../components/ProjectItem';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import projectsData from '../api/db';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <div
        className='bg-white h-screen flex flex-col justify-center items-center gap-y-10'
        styles={styles.area}
      >
        <div>
          <Typography className='text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-l from-primary to-gray-dark '>
            Hi, I'm Tsvetomira
          </Typography>
          <Typography className='text-xl md:text-3xl text-center text-gray-dark'>
            A product designer and a developer
          </Typography>
        </div>
        <div>
          <Button
            onClick={() => scrollToSection('projects-section')}
            variant={'contained'}
            color={'primary'}
            className={'z-10 text-white'}
          >
            Check out my most recent work
          </Button>
        </div>
        {!isMobile && (
          <ul className={styles.squares}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
              <li />
            ))}
          </ul>
        )}
      </div>

      {/* TODO: Fix Fonts */}

      <div id='projects-section' className='bg-gray-0 pt-20'>
        <Typography className='pb-4 text-lg text-gray'>Recent Work</Typography>

        {projectsData.map((project) => (
          <ProjectItem
            mainImageSrc={project.mainImageSrc}
            name={project.name}
            description={project.description}
            bgColor={'secondary'}
          />
        ))}
      </div>
    </>
  );
}
