import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Footer.css';
import { createStructuredSelector } from 'reselect';
import { userSelector } from '../../redux/user/user-selector';

const Footer = ({user}) => {
  return (
      <footer id="Footer">
        <div className="tablet-flex">
          <h3>STORE</h3>
          <ul className="footerNav">
            <li><Link to="/shop/mens">MEN</Link></li>
            <li><Link to="/shop/womens">WOMEN'S</Link></li>
            <li><Link to="/shop/jackets">JACKETS</Link></li>
            <li><Link to="/shop/sneakers">SNEAKERS</Link></li>
            <li><Link to="/shop/hats">HATS</Link></li>
          
            <li className="break"><Link to="/shop">SHOP</Link></li>
          </ul>
        </div>

        <div className="tablet-flex">
          <h3>ACCOUNT</h3>
          <ul className="footerNav">
            {user ? <li>SIGN OUT</li> : ''}
            {user ? '' : <li>SIGN IN</li>}
            {user ? '' : <li>REGISTER</li>}
            <li><Link to="#">HELP</Link></li>
          </ul>
        </div>

        <div className="tablet-flex">
          <h3>SOCIAL</h3>
          <ul className="footerNav">
            <li>TWITTER</li>
            <li>INSTAGRAM</li>
            <li>FACEBOOK</li>

            <li className="break">DOWNLOAD OUR APP</li>
          </ul>
        </div>

        <div className="tablet-flex">
          <h3>ULTIMATE</h3>
          <ul className="footerNav">
            <li>ABOUT</li>
            <li>DESIGNERS</li>
            <li>CONTACT</li>
            <li>CAREERS</li>
          </ul>
        </div>
      </footer>
  );
};

const mapStateToProps = createStructuredSelector({
  user: userSelector
})

export default connect(mapStateToProps, null)(Footer);