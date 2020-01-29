import React from 'react';

const ShopItem = () => {
  return (
    <li className="ShopItem">
      <img src="#" className="shopItemImage" alt="hat" />
      <button className="shopInverted">Add to cart</button>
      <p>Blue Beanie</p>
      <span>$35</span>
    </li>
  );
};

export default ShopItem;