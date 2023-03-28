import React from 'react';
import { Typography, Button } from '@mui/material';
import icons from '../api/icons';
import ToolsListItem from '../components/ToolsListItem';
import portrait from '../static/portrait.jpg';
import Tooltip from '@mui/material/Tooltip';
import ExperienceStepper from '../components/ExperienceStepper';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import resume from '../static/Tsvetomira-Hristova-CV.pdf';

//TODO: Maybe create a reusable section with title, subtitle, children

export default function AboutMePage() {
  return (
    <div className='bg-white grid md:gap-y-16 gap-y-10 py-4 md:mx-6 mx-4'>
      <div className='Section  grid grid-cols-1 md:grid-cols-3 items-start md:mt-5 gap-y-10  '>
        <div className='col-span-1 md:col-span-3 order-1'>
          <Typography className=' underline md:text-3xl text-2xl'>
            A little bit about myself
          </Typography>
        </div>
        <img
          src={portrait}
          className={
            'col-span-2 md:col-span-1 h-72 lg:h-96 rounded-lg justify-self-center md:justify-self-start order-3 md:order-2'
          }
        />
        {/* TODO: Come back to img  */}

        <div className='col-span-2 md:col-span-2 order-2 md:order-3 grid gap-y-10'>
          <Typography variant={'h6'} className={''}>
            Hi! My name is Tsvetomira Hristova and I am a gym-goer 🏋️‍♀️, an avid
            concert enjoyer 🎸, a traveler✈️, a problem-solver✔️, and a human
            being who cares about creating a lasting, meaningful impact on other
            humans' experiences through good design.
          </Typography>

          <Typography variant={'h6'} className={''}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Typography>
        </div>
      </div>

      <div className='Section grid grid-cols-1 md:grid-cols-2 gap-y-10'>
        <div className=''>
          <Typography className={'underline md:text-3xl text-2xl'}>
            Toolbelt
          </Typography>
          <Typography className='text-md'>
            Some of the most common tools I use in my work include:
          </Typography>
        </div>

        <div className='grid grid-cols-4 gap-y-10'>
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

      <div className='Section grid grid-cols-1 md:grid-cols-2 gap-y-10'>
        <Typography className={'underline md:text-3xl text-2xl'}>
          Experience
        </Typography>

        <ExperienceStepper />
      </div>

      <div className={'Section flex justify-center'}>
        <a href={resume} download='CV - Tsvetomira Hristova.pdf'>
          <Button
            color='secondary'
            variant='contained'
            endIcon={<FileDownloadOutlinedIcon />}
          >
            Download CV
          </Button>
        </a>
      </div>
    </div>
  );
}
