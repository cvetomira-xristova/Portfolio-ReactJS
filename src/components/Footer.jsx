import React from 'react';
import { Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import GitHubIcon from '@mui/icons-material/GitHub';

const lnLink = 'https://www.linkedin.com/in/tsvetomira-hristova-1b9759172/';
const emailAddress = 'cvetomira.xristova@gmail.com';
const repoLink = 'https://github.com/cvetomira-xristova/Portfolio-ReactJS';

const socials = [
  { id: 'phone', info: '+359 88 228 1240', icon: <StayCurrentPortraitIcon /> },
  {
    id: 'email',
    info: emailAddress,
    icon: <EmailIcon />,
    link: `mailto:${emailAddress}`,
  },
  {
    id: 'linkedin',
    info: 'Tsvetomira Hristova',
    icon: <LinkedInIcon />,
    link: lnLink,
  },
  {
    id: 'github',
    info: 'View this repo on Github',
    icon: <GitHubIcon />,
    link: repoLink,
  },
];

export default function Footer() {
  return (
    <div className='flex flex-col items-center'>
      <Typography variant='h5' className='pt-8' align='center'>
        Let's connect
      </Typography>
      <Typography variant='subtitle1' className='pt-2' align='center'>
        Get in touch for opportunities or just to say hi! 👋
      </Typography>

      <div className='py-8'>
        {socials.map((social) => (
          <a
            href={social.link}
            key={social.id}
            className='flex align-middle pt-2'
          >
            {social.icon}
            <Typography className='pl-4'>{social.info}</Typography>
          </a>
        ))}
      </div>
    </div>
  );
}
