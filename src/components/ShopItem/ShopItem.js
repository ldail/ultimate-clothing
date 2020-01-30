import React from 'react';

const ShopItem = ({collectionTitle, collectionInfo: {id, imageUrl, name, price}}) => {
  return (
    <li className="ShopItem">
      <img src={imageUrl} className="shopItemImage" alt={collectionTitle} />
      <button className="shopInverted">Add to cart</button>
      <p>{name}</p>
      <span>${price}</span>
    </li>
  );
};

export default ShopItem;