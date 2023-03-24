import React from 'react';
import { createProjectNameFromPath, getCurrentPath } from '../utils/common';
import projectsData from '../api/db';
import { Button, Container, Typography } from '@mui/material';

export default function ProjectPage() {
  // TODO: Maybe match it to project id?
  const path = getCurrentPath();
  const name = createProjectNameFromPath(path);

  const projectObj = projectsData.find((project) => project.name === name);

  return (
    <div>
      <div className='h-screen bg-red-200 flex items-center justify-center'>
        <img src={projectObj?.mainImageSrc} alt='' className='h-2/3' />
        {/* <Button>Next</Button> */}
      </div>
      <div className='h-screen bg-gray-200 py-24'>
        <Typography variant={'h4'}> {projectObj?.name}</Typography>
        <Typography variant={'h6'}> {projectObj?.longDescription}</Typography>
        {/* TODO: Think about structure a little bit more */}
      </div>
      {/*TODO: Fixed Back to Top Button */}
    </div>
  );
}
