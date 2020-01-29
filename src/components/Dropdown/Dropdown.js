import React from 'react';
import ShopItemMinimized from '../ShopItemMinimized/ShopItemMinimized';

const Dropdown = () => {
  return (
    <div>
      <div className="cart">
        <ShopItemMinimized />
      </div>
      <button className="shop">GO TO CHECKOUT</button>
    </div>
  );
};

export default Dropdown;