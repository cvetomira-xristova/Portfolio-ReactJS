import React, { useState } from 'react';
import { AppBar, Link, Toolbar, useMediaQuery, Drawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavItem from './NavItem';
import resume from '../static/Tsvetomira-Hristova-CV.pdf';
import InitialsNavItem from './InitialsNavItem';

const links = [
  { key: 'home', title: 'Home', href: '/' },
  { key: 'about-me', title: 'About Me', href: '/about-me' },
  { key: 'work', title: 'Work', href: '/work' },
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
        {isMobile && (
          <>
            <InitialsNavItem />
            <IconButton
              size='large'
              edge='start'
              onClick={() => setIsMobileNavOpen(true)}
            >
              <MenuIcon className='text-black' />
            </IconButton>

            <Drawer
              open={isMobileNavOpen}
              onClose={() => setIsMobileNavOpen(false)}
              anchor='top'
            >
              {links.map((link) => (
                <NavItem
                  key={link.key}
                  href={link.href}
                  title={link.title}
                  download={link.key === 'resume' && true}
                  classes={'my-4 text-center'}
                />
              ))}
            </Drawer>
          </>
        )}

        {!isMobile && (
          <>
            <InitialsNavItem />
            <div className='flex'>
              {links.map((link) => (
                <NavItem
                  key={link.key}
                  href={link.href}
                  title={link.title}
                  download={link.key === 'resume' && true}
                  className={'my-4'}
                />
              ))}
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
