import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { createHrefFromProjectName } from '../utils/common';

export default function ProjectItem({ name, description, imageSrc, bgColor }) {
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
    <Link to={`/work/${href}`}>
      <div className={className} style={styles}>
        <div className='order-2 sm:order-1'>
          <img src={imageSrc} alt='Project Image' className='h-36 sm:h-56' />
        </div>
        <div className='order-1 sm:order-2'>
          <Typography align='center' variant={isMobile ? 'h5' : 'h3'}>
            {name}
          </Typography>
          <Typography align='center'>{description}</Typography>
        </div>
      </div>
    </Link>
  );
}
