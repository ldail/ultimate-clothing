import React from 'react';

const CollectionPage = () => {
  return (
      <main id="CollectionPage">
        <h2>HATS</h2>

        <ul>
          <li className="shopItem">
            <img src="#" className="shopItemImage" alt="hat" />
            <button className="shopInverted">Add to cart</button>
            <p>Blue Beanie</p>
            <span>$35</span>
          </li>
        </ul>
      </main>
  );
};

export default CollectionPage;