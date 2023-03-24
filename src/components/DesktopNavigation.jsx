import React from 'react';
import InitialsNavItem from './InitialsNavItem';
import NavItem from './NavItem';

export default function DesktopNavigation({ navItems }) {
  return (
    <>
      <InitialsNavItem />
      <div className='flex'>
        {navItems.map((item) => (
          <NavItem
            key={item.key}
            href={item.href}
            title={item.title}
            download={item.key === 'resume' && true}
            children={item.children}
          />
        ))}
      </div>
    </>
  );
}
