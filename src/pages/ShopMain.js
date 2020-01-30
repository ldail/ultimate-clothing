import React from 'react';
import {withRouter} from 'react-router-dom';

const ShopMain = ({history}) => {
  return (
      <main id="ShopMain">
        <section className="sellPromos">
          <div className="shopWomens">
            <button className="shop" onClick={() => history.push('/shop/womens')}>SHOP WOMEN'S</button>
          </div>
          <div className="shopMens">
            <button className="shop" onClick={() => history.push('/shop/mens')}>SHOP MEN'S</button>
          </div>
        </section>

        <section className="sellPrimary">
          <h2>HAND-CRAFTED LUXURY </h2>
          <h3>made by world-class designers</h3>

          <div className="shopSneakers">
            <button className="shopInverted" onClick={() => history.push('/shop/sneakers')}>SHOP SNEAKERS</button>
          </div>

          <div className="shopHats">
            <button className="shopInverted" onClick={() => history.push('/shop/hats')}>SHOP HATS</button>
          </div>

          <div className="shopJackets">
            <button className="shopInverted" onClick={() => history.push('/shop/jackets')}>SHOP JACKETS</button>
          </div>
        </section>
      </main>
  );
};

export default withRouter(ShopMain);