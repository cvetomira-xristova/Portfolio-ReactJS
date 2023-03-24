import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';

const lnLink = 'https://www.linkedin.com/in/tsvetomira-hristova-1b9759172/';
const emailAddress = 'cvetomira.xristova@gmail.com';

const socials = [
  { info: '+359 88 228 1240', icon: <StayCurrentPortraitIcon /> },
  { info: emailAddress, icon: <EmailIcon />, link: `mailto:${emailAddress}` },
  { info: 'Tsvetomira Hristova', icon: <LinkedInIcon />, link: lnLink },
];

export default function Footer() {
  return (
    <div className='bg-gray-200 flex flex-col items-center'>
      <Typography variant='h5' className='pt-8' align='center'>
        Let's connect
      </Typography>
      <Typography variant='subtitle1' className='pt-2' align='center'>
        Get in touch for opportunities or just to say hi! 👋
      </Typography>

      <div className='py-8'>
        {socials.map((social) => (
          <a href={social.link} className='flex align-middle pt-2'>
            {social.icon}
            <Typography className='pl-4'>{social.info}</Typography>
          </a>
        ))}
      </div>
    </div>
  );
}
