import React, { useState } from 'react';
import { AppBar, Toolbar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import resume from '../static/Tsvetomira-Hristova-CV.pdf';
import projectsData from '../api/db';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const links = [
  { key: 'home', title: 'Home', href: '/' },
  { key: 'about-me', title: 'About Me', href: '/about-me' },
  {
    key: 'work',
    title: 'Work',
    href: '/work',
    children: projectsData.map((project) => {
      return { name: project.name, id: project.id };
    }),
  },
  {
    key: 'resume',
    title: 'Resume',
    href: resume,
  },
];

export default function Navigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar className='bg-white shadow-none flex justify-between'>
        {isMobile ? (
          <MobileHeader links={links} />
        ) : (
          <DesktopHeader links={links} />
        )}
      </Toolbar>
    </AppBar>
  );
}
