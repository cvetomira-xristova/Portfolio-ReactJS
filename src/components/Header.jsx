import React from 'react';
import { AppBar, Toolbar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import projectsData from '../api/db';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

const navItems = [
  { key: 'home', title: 'Home', href: '/' },
  { key: 'about-me', title: 'About Me', href: '/about-me' },
  {
    key: 'work',
    title: 'Work',
    href: '/work',
    subItems: projectsData.map((project) => {
      return { name: project.name, id: project.id };
    }),
  },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar className='bg-white shadow-none flex justify-between'>
        {isMobile ? (
          <MobileNavigation navItems={navItems} />
        ) : (
          <DesktopNavigation navItems={navItems} />
        )}
      </Toolbar>
    </AppBar>
  );
}
