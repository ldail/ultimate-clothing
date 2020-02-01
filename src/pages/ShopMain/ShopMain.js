import React from 'react';
import {withRouter} from 'react-router-dom';

//Styling
import './ShopMain.css';

const ShopMain = ({history}) => {
  return (
      <main id="ShopMain">
        <section className="sellPromos">
          <div className="shopHighlight shopWomens">
            <div className="mobile-hidden">
              <p className="highlight">NEW YEAR</p>
              <p className="under-highlight">NEW YOU</p>
            </div>
            <button className="shop" onClick={() => history.push('/shop/womens')}>SHOP WOMEN'S</button>
          </div>
          <div className="shopHighlight shopMens">
          <div className="mobile-hidden">
              <p className="highlight">ONE-OF-A-KIND</p>
              <p className="under-highlight">FABRICS</p>
            </div>
            <button className="shop" onClick={() => history.push('/shop/mens')}>SHOP MEN'S</button>
          </div>
        </section>

        <section className="sellPrimary">
          <h2>HAND-CRAFTED LUXURY </h2>
          <h3>made by world-class designers</h3>

          <div class="tablet-flex">
            <div className="shopFeature jackets">
              <button className="shopInverted" onClick={() => history.push('/shop/jackets')}>SHOP JACKETS</button>
            </div>

            <div className="shopFeature sneakers">
              <button className="shopInverted" onClick={() => history.push('/shop/sneakers')}>SHOP SNEAKERS</button>
            </div>

            <div className="shopFeature hats">
              <button className="shopInverted" onClick={() => history.push('/shop/hats')}>SHOP HATS</button>
            </div>
          </div>
        </section>
      </main>
  );
};

export default withRouter(ShopMain);