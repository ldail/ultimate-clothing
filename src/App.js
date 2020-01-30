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
import {auth, createUserProfileDocument, firestore} from './firebase/firebase.utils'
import { addItems } from './redux/collections/collections-actions';
import Checkout from './pages/Checkout';
import Dropdown from './components/Dropdown/Dropdown';


function App({setUser, addItems}) {

  let unsubscribeFromAuth = null;
  let unsubscribeFromCollections = null;

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

    const collectionRef = firestore.collection('collections');
    unsubscribeFromCollections = collectionRef.onSnapshot(snapshot => {
      let collectionNames = snapshot.docs;
      let mappedCollectionData = [];
      collectionNames.forEach(doc => {
        mappedCollectionData.push(doc.data());
      });

      addItems(mappedCollectionData)
    })

    return () => {
      unsubscribeFromAuth();
      unsubscribeFromCollections();
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
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
      <Dropdown />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(signIn(user)),
  addItems: (items) => dispatch(addItems(items))
})

export default connect(null, mapDispatchToProps)(App);
