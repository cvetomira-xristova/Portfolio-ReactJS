import React from 'react';
import { Typography, Button } from '@mui/material';
import icons from '../api/icons';
import ToolsListItem from '../components/ToolsListItem';
import portrait from '../static/portrait.jpg';
import Tooltip from '@mui/material/Tooltip';
import ExperienceStepper from '../components/ExperienceStepper';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import resume from '../static/Tsvetomira-Hristova-CV.pdf';

export default function AboutMePage() {
  return (
    <div className='bg-gray-0 grid gap-y-16 py-10 mx-6'>
      <div>
        <Typography variant={'h4'} className='underline'>
          A little bit about myself
        </Typography>
      </div>

      <div className='grid grid-cols-3 items-start mt-5 '>
        <img src={portrait} className={' col-span-2 sm:col-span-1 h-80 '} />

        <div className='col-span-2 sm:col-span-2'>
          <Typography variant={'h6'} className={''}>
            Hi! My name is Tsvetomira Hristova and I am a gym-goer 🏋️‍♀️, an avid
            concert enjoyer 🎸, a traveler✈️, a problem-solver✔️, and a human
            being who cares about creating a lasting, meaningful impact on other
            humans' experiences through good design.
          </Typography>

          <Typography
            variant={'h6'}
            className={'pt-12 py-6 col-span-2 sm:col-span-2'}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Typography>
        </div>
      </div>

      <div className='grid grid-cols-2'>
        <div className=''>
          <Typography variant={'h4'} className={' underline'}>
            Toolbelt
          </Typography>
          <Typography variant={'subtitle1'} className={''}>
            Some of the most common tools I use in my work include:
          </Typography>
        </div>

        <div className='grid grid-cols-4 gap-y-8'>
          {icons.map((icon) => (
            <ToolsListItem
              name={icon.name}
              key={icon.id}
              src={icon.src}
              className={'col-span-1 flex justify-center flex-col items-center'}
            />
          ))}
        </div>
      </div>

      <div className='grid grid-cols-2'>
        <Typography variant={'h4'} className={'underline'}>
          Experience
        </Typography>

        <ExperienceStepper />
      </div>

      <div className={'flex justify-center'}>
        <a href={resume} download='CV - Tsvetomira Hristova.pdf'>
          <Button variant='contained' endIcon={<FileDownloadOutlinedIcon />}>
            Download CV
          </Button>
        </a>
      </div>
    </div>
  );
}
