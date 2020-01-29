//Dependencies
import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';

//Redux
import {connect} from 'react-redux';
import {signIn} from './redux/user/user-actions'

//Components & Pages
import Header from './components/Header/Header';
import ShopMain from './pages/ShopMain';
import Footer from './components/Footer/Footer';
import CollectionPage from './pages/CollectionPage';
import ShopCollectionsPage from './pages/ShopCollectionsPage';
import SignIn from './pages/SignIn';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'


function App({setUser}) {

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot => {
        setUser({
          id: snapshot.id,
          ...snapshot.data()
        });
      });
    }
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

const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(signIn(user))
})

export default connect(null, mapDispatchToProps)(App);
