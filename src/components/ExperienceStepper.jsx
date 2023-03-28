import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StepIcon from '@mui/material/StepIcon';
import StarIcon from '@mui/icons-material/Star';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const steps = [
  {
    occupation: 'Frontend Developer',
    company: 'Move Digital AG',
    date: 'Nov 2021 - Nov 2022',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
  },
  {
    occupation: 'Worked on Graduation Project',
    date: 'Aug 2021 - Oct 2021',
    description:
      'During this period I was occupied with creating, documenting and presenting my graduation project.',
  },
  {
    occupation: 'Junior Frontend Developer',
    company: 'Altscale Bulgaria',
    date: 'Nov 2019 - July 2021',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
  },
];

export default function ExperienceStepper() {
  return (
    <Box sx={{ maxWidth: 500 }}>
      <Stepper orientation='vertical'>
        {steps.map((step) => (
          <Step key={step.occupation} expanded active last={false}>
            <StepLabel
              StepIconComponent={() => <LocationOnOutlinedIcon />}
              optional={<Typography>{step.date}</Typography>}
            >
              <Typography>
                <span>{step.occupation}</span>
                {step.company && (
                  <>
                    {' at '}
                    <span className='text-violet-600 font-extrabold'>
                      {step.company}
                    </span>
                  </>
                )}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography variant={'subtitle1'}>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
