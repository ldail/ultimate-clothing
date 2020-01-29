import React from 'react';

const ShopMain = () => {
  return (
      <main id="ShopMain">
        <section className="sellPromos">
          <div className="shopWomens">
            <button className="shop">SHOP WOMEN'S</button>
          </div>
          <div className="shopMens">
            <button className="shop">SHOP MEN'S</button>
          </div>
        </section>

        <section className="sellPrimary">
          <h2>HAND-CRAFTED LUXURY </h2>
          <h3>made by world-class designers</h3>

          <div className="shopSneakers">
            <button className="shopInverted">SHOP SNEAKERS</button>
          </div>

          <div className="shopHats">
            <button className="shopInverted">SHOP HATS</button>
          </div>

          <div className="shopJackets">
            <button className="shopInverted">SHOP JACKETS</button>
          </div>
        </section>
      </main>
  );
};

export default ShopMain;