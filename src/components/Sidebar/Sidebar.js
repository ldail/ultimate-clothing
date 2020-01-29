import React from 'react';
import {connect} from 'react-redux';
import userReducer from '../../redux/user/user-reducer';

const Sidebar = ({user}) => {
  return (
    <ul>
      <li>{user ? 'SIGN OUT' : 'SIGN IN'}</li>
      <li>CART</li>
      <li className="break">SHOP</li>
      <li className="break">MEN'S</li>
      <li>WOMEN'S</li>
      <li>JACKETS</li>
      <li>SNEAKERS</li>
      <li>HATS</li>
    </ul>
  );
};

const mapStateToProps = () => ({
  user: userReducer
})

export default connect(mapStateToProps, null)(Sidebar);