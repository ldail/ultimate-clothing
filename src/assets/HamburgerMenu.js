import React from 'react';

const HamburgerMenu = ({stroke, fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="hamburger">
      <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" stroke={stroke} fill={fill} className="hamburger" />
    </svg>
  );
};

export default HamburgerMenu;