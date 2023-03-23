import React, { useState } from 'react';
import { AppBar, Link, Toolbar, useMediaQuery, Drawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about-me' },
  { name: 'Work', href: '/work' },
  { name: 'Resume', href: '/resume' }, // TODO: Make downloadable
];

const initials = () => {
  return <p className='text-gray-800'>Tsveti H.</p>;
};

export default function Navigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar className='bg-gray-500 shadow-none flex justify-between'>
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
                <Link href='#' color='primary' key={link.name}>
                  {link.name}
                </Link>
              ))}
            </Drawer>
          </>
        )}

        {!isMobile && (
          <>
            {initials()}
            <div className='flex'>
              {links.map((link) => (
                <Link
                  href={link.href}
                  color='primary'
                  className='pr-8'
                  key={link.name}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
