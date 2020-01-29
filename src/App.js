//Dependencies
import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';

//Components & Pages
import Header from './components/Header/Header';
import ShopMain from './pages/ShopMain';
import Footer from './components/Footer/Footer';
import CollectionPage from './pages/CollectionPage';
import ShopCollectionsPage from './pages/ShopCollectionsPage';
import SignIn from './pages/SignIn';
import {auth} from './firebase/firebase.utils'


function App() {

  const [user, setUser] = useState(null)

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setUser(user);
      console.log(user);
    })

    return () => {
      unsubscribeFromAuth();
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ShopMain} />
        <Route exact path="/shop" component={ShopCollectionsPage} />
        <Route path="/shop/:id" component={CollectionPage} />
        <Route path="/signin" component={SignIn} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
