import React, { useState } from 'react';
import { AppBar, Link, Toolbar, useMediaQuery, Drawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavItem from './NavItem';
import resume from '../static/Tsvetomira-Hristova-CV.pdf';

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

const initials = () => {
  const style = {
    fontFamily: 'REMEEQtrial, sans-serif',
    fontSize: '30px',
    letterSpacing: '1px',
  };

  return (
    <p style={style} className='text-gray-800'>
      T. H.
    </p>
  );
};

export default function Navigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar className='bg-white shadow-none flex justify-between'>
        {isMobile && (
          <>
            {initials()}
            <IconButton
              size='large'
              edge='start'
              color='black'
              onClick={() => setIsMobileNavOpen(true)}
            >
              <MenuIcon />
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
                  icon={link.icon}
                />
              ))}
            </Drawer>
          </>
        )}

        {!isMobile && (
          <>
            {initials()}
            <div className='flex'>
              {links.map((link) => (
                <NavItem
                  key={link.key}
                  href={link.href}
                  title={link.title}
                  download={link.key === 'resume' && true}
                  icon={link.icon}
                />
              ))}
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
