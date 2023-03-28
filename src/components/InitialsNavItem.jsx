import React from 'react';

export default function InitialsNavItem() {
  const style = {
    fontFamily: 'REMEEQtrial, sans-serif',
    fontSize: '30px',
    letterSpacing: '1px',
    // background: `-webkit-linear-gradient(#eee, #333)`,
    // backgroundClip: 'text',
    // textFillColor: 'transparent',
  };

  //TODO: Check if the route is / and if it is just scroll up else navigate to /

  return (
    <a
      style={style}
      href='/'
      // className='text-gray-800 bg-clip-text bg-gradient-to-b from-[#CE9DD9] to-[#B399D4] text-transparent	'
      className=' bg-clip-text bg-gradient-to-br from-primary to-secondary text-transparent	'
    >
      T. H.
    </a>
  );
}
