import React from 'react';
import ShopItem from '../components/ShopItem/ShopItem';

const ShopCollectionsPage = () => {
  return (
    <main id="ShopCollectionsPage">
      <h2>MEN'S</h2>
      <ul className="collectionsItems">
        <ShopItem />
      </ul>
    </main>
  );
};

export default ShopCollectionsPage;