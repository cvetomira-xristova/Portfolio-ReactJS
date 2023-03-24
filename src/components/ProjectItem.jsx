import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export default function ProjectItem({
  name,
  description,
  imageSrc,
  bgColor,
  href,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(bgColor);
  const className = `h-80 grid grid-cols-1 sm:grid-cols-2 items-center content-center justify-items-center mb-8
   bg-gradient-to-r from-${bgColor}-500 hover:scale-[98%] duration-500`;

  return (
    <Link to={`/work/${href}`}>
      <div className={className}>
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
