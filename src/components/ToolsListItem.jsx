import React from 'react';
import Typography from '@mui/material/Typography';

export default function ToolsListItem({ name, src, className }) {
  //TODO: Add tooltip maybe?

  return (
    <div className={className}>
      <img
        src={src}
        alt=''
        className='max-h-10 md:max-h-12 max-w-[40px] md:max-w-[60px] mb-4'
      />
      <Typography align='center' className='text-xs lg:text-lg '>
        {name}
      </Typography>
    </div>
  );
}
