import React from 'react';

const Header = () => {
  return (
      <header>
        <div className="promoBar">
          <div className="hamburger">=</div>
          <p>Free shipping on orders over $70 at checkout</p>
        </div>

        <h1>ULTIMATE</h1>
        <nav>
          <ul>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>JACKETS</li>
            <li>SNEAKERS</li>
            <li>HATS</li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;