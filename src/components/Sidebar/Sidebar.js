import React from 'react';
import {connect} from 'react-redux';
import userReducer from '../../redux/user/user-reducer';
import {dropdownHiddenToggle} from '../../redux/navigation/navigation-actions'

const Sidebar = ({user, dropdownHiddenToggle}) => {
  return (
    <ul>
      <li>{user ? 'SIGN OUT' : 'SIGN IN'}</li>
      <li onClick={() => dropdownHiddenToggle()}>CART</li>
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

const mapDispatchToProps = (dispatch) => ({
  dropdownHiddenToggle: () => dispatch(dropdownHiddenToggle())
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);