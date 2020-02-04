import React from 'react';
import {LinkScrollToTop as Link} from '../LinkScrollToTop';
import {connect} from 'react-redux';
import './Footer.css';
import { createStructuredSelector } from 'reselect';
import { userSelector } from '../../redux/user/user-selector';
import { signOutStart } from '../../redux/user/user-actions';

const Footer = ({user}) => {
  return (
      <footer id="Footer">
        <div className="tablet-flex">
          <h3>STORE</h3>
          <ul className="footerNav">

            <li><Link to="/shop">SHOP</Link></li>

            <li className="break"><Link to="/shop/mens">MEN</Link></li>
            <li><Link to="/shop/womens">WOMEN'S</Link></li>
            <li><Link to="/shop/jackets">JACKETS</Link></li>
            <li><Link to="/shop/sneakers">SNEAKERS</Link></li>
            <li><Link to="/shop/hats">HATS</Link></li>
          
          </ul>
        </div>

        <div className="tablet-flex">
          <h3>ACCOUNT</h3>
          <ul className="footerNav">
            {user ? <li><Link to="/" onClick={() => signOutStart()}>SIGN OUT</Link></li> : ''}
            {user ? '' : <li><Link to="/signin">SIGN IN</Link></li>}
            {user ? '' : <li><Link to="/signin">REGISTER</Link></li>}
            <li><Link to="#">HELP</Link></li>
          </ul>
        </div>

        <div className="tablet-flex">
          <h3>SOCIAL</h3>
          <ul className="footerNav">
            <li><Link to="#">TWITTER</Link></li>
            <li><Link to="#">INSTAGRAM</Link></li>
            <li><Link to="#">FACEBOOK</Link></li>

            <li className="break"><Link to="#">DOWNLOAD OUR APP</Link></li>
          </ul>
        </div>

        <div className="tablet-flex">
          <h3>ULTIMATE</h3>
          <ul className="footerNav">
            <li><Link to="#">ABOUT</Link></li>
            <li><Link to="#">DESIGNERS</Link></li>
            <li><Link to="#">CONTACT</Link></li>
            <li><Link to="#">CAREERS</Link></li>
          </ul>
        </div>
      </footer>
  );
};

const mapStateToProps = createStructuredSelector({
  user: userSelector
})

export default connect(mapStateToProps, null)(Footer);