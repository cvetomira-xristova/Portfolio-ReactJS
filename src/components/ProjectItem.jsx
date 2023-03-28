import React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { createHrefFromProjectName } from '../utils/common';

export default function ProjectItem({
  name,
  description,
  mainImageSrc,
  bgColor,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const className = `grid grid-cols-1 sm:grid-cols-2 items-center content-center justify-items-center 
  h-80 mb-8 hover:scale-[98%] duration-500 
  bg-gradient-to-tl from-primary to-gray-light`;
  // TODO: Fix gradients
  // TODO: Perhaps create a bgColorArr and create the styles in the parent component

  const href = createHrefFromProjectName(name);

  return (
    <a href={`/work/${href}`}>
      <div className={className}>
        <div className='order-2 sm:order-1'>
          <img
            src={mainImageSrc}
            alt='Project Image'
            className='h-36 sm:h-56'
          />
        </div>
        <div className='order-1 sm:order-2'>
          <Typography
            className='text-3xl sm:text-4xl text-white'
            align='center'
          >
            {name}
          </Typography>
          <Typography className='' align='center'>
            {description}
          </Typography>
        </div>
      </div>
    </a>
  );
}
