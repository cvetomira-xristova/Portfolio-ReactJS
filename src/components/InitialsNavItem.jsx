import React from 'react';

export default function InitialsNavItem() {
  const style = {
    fontFamily: 'REMEEQtrial, sans-serif',
    fontSize: '30px',
    letterSpacing: '1px',
  };

  //TODO: Check if the route is / and if it is just scroll up else navigate to /

  return (
    <a style={style} href='/' className='text-gray-800'>
      T. H.
    </a>
  );
}
