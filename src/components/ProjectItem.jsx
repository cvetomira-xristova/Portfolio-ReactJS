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
  h-80 mb-8 hover:scale-[98%] duration-500`;

  const styles = {
    backgroundImage: `linear-gradient(to bottom, ${bgColor},${bgColor}, white)`,
  };

  // TODO: Perhaps create a bgColorArr and create the styles in the parent component

  const href = createHrefFromProjectName(name);

  return (
    <a href={`/work/${href}`}>
      <div className={className} style={styles}>
        <div className='order-2 sm:order-1'>
          <img
            src={mainImageSrc}
            alt='Project Image'
            className='h-36 sm:h-56'
          />
        </div>
        <div className='order-1 sm:order-2'>
          <Typography align='center' variant={isMobile ? 'h5' : 'h3'}>
            {name}
          </Typography>
          <Typography align='center'>{description}</Typography>
        </div>
      </div>
    </a>
  );
}
