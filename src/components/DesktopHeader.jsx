import React from 'react';
import InitialsNavItem from './InitialsNavItem';
import NavItem from './NavItem';

export default function DesktopHeader({ links }) {
  return (
    <>
      <InitialsNavItem />
      <div className='flex'>
        {links.map((link) => (
          <NavItem
            key={link.key}
            href={link.href}
            title={link.title}
            download={link.key === 'resume' && true}
            children={link.children}
          />
        ))}
      </div>
    </>
  );
}
