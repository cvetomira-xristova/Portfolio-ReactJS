import React, { useState } from 'react';
import { AppBar, Link, Toolbar, useMediaQuery, Drawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavItem from './NavItem';
import resume from '../static/Tsvetomira-Hristova-CV.pdf';
import InitialsNavItem from './InitialsNavItem';
import { scrollToSection } from '../utils/common';
import projectsData from '../api/db';

export default function MobileHeader({ links }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
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
            children={link.children}
          />
        ))}
      </Drawer>
    </>
  );
}
