import React from 'react';
import Typography from '@mui/material/Typography';

export default function TitledToolWithIcon({ name, src, className }) {
  //TODO: Add tooltip maybe?

  return (
    <div className={className}>
      <img src={src} alt='' className='max-h-12 max-w-[60px] mb-4' />
      <Typography align='center' variant='subtitle2' color='initial'>
        {name}
      </Typography>
    </div>
  );
}
