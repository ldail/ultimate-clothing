import React from 'react';
import {Link} from 'react-router-dom';

export const LinkScrollToTop = ({to="/", onClick=()=>{}, children}) => {
  return (
    <Link to={to} onClick={() => {
      onClick();
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }}>
      {children}
    </Link>
  );
};