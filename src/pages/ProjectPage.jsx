import React from 'react';
import { getCurrentPath } from '../utils/common';
import projectsData from '../api/db';
import { Button, Container, Typography } from '@mui/material';

// TODO: Fixed Back to Top Button
// TODO: Think about structure a little bit more
// TODO: <Button>Next</Button>

export default function ProjectPage() {
  const path = getCurrentPath();

  const projectObj = projectsData.find(
    (project) => `/work/${project.id}` === path
  );

  return (
    <div>
      {/* <div className='h-screen bg-red-200 flex items-center justify-center'>
        <img src={projectObj?.mainImageSrc} alt='' className='h-2/3' />
      </div> */}
      <div className='h-screen bg-gray-200 py-24'>
        <Typography variant={'h4'}> {projectObj?.name}</Typography>
        <Typography variant={'h6'}> {projectObj?.longDescription}</Typography>
      </div>
    </div>
  );
}
