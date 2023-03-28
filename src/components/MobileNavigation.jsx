import React, { useState } from 'react';
import { Drawer, Icon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavItem from './NavItem';
import InitialsNavItem from './InitialsNavItem';

export default function MobileNavigation({ navItems }) {
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
        {navItems.map((item) => (
          <NavItem
            key={item.key}
            href={item.href}
            title={item.title}
            subItems={item.subItems}
          />
        ))}
      </Drawer>
    </>
  );
}
