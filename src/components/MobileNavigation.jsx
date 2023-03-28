import React, { useState } from 'react';
import { Drawer, Icon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavItem from './NavItem';
import InitialsNavItem from './InitialsNavItem';
import CloseIcon from '@mui/icons-material/Close';

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
        {/* TODO: Maybe Remove */}
        {/* <IconButton
          className='flex justify-end mr-4 mt-2'
          onClick={() => setIsMobileNavOpen(false)}
        >
          <CloseIcon />
        </IconButton> */}
        {navItems.map((item) => (
          <NavItem
            key={item.key}
            href={item.href}
            title={item.title}
            // download={item.key === 'resume' && true}
            classes={'my-4 mx-10'}
            subItems={item.subItems}
          />
        ))}
      </Drawer>
    </>
  );
}
