//Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import Header from './components/Header/header';
import ShopMain from './components/ShopMain/shop-main';
import Footer from './Footer/footer';
import CollectionPage from './pages/CollectionPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ShopMain} />
        <Route path="/shop/:id" component={CollectionPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
