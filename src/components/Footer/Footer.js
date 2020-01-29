import React from 'react';

const Footer = () => {
  return (
      <footer>
        <h3>STORE</h3>
        <ul className="footerNav">
          <li>MEN</li>
          <li>WOMEN'S</li>
          <li>JACKETS</li>
          <li>SNEAKERS</li>
          <li>HATS</li>

          <li className="break">SHOP</li>
          <li>CART</li>
        </ul>

        <h3>ACCOUNT</h3>
        <ul className="footerNav">
          <li>SIGN IN</li>
          <li>REGISTER</li>
          <li>HELP</li>
        </ul>

        <h3>SOCIAL</h3>
        <ul className="footerNav">
          <li>TWITTER</li>
          <li>INSTAGRAM</li>
          <li>FACEBOOK</li>

          <li className="break">DOWNLOAD OUR APP</li>
        </ul>

        <h3>ULTIMATE</h3>
        <ul className="footerNav">
          <li>ABOUT</li>
          <li>DESIGNERS</li>
          <li>CONTACT</li>
          <li>CAREERS</li>
        </ul>
      </footer>
  );
};

export default Footer;