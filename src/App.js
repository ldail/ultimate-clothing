//Dependencies
import React, {useEffect, useState, lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';

//Redux
import {connect} from 'react-redux';
import {signIn} from './redux/user/user-actions'
import {createStructuredSelector} from 'reselect';
import {checkUser} from './redux/user/user-actions';

//Components & Pages
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import { addItems, fetchCollectionsStart } from './redux/collections/collections-actions';
import Dropdown from './components/Dropdown/Dropdown';
import Sidebar from './components/Sidebar/Sidebar';

//Styling
import './App.css';
import { sidebarSelector, dropdownSelector } from './redux/navigation/navigation-selector';
import Spinner from './components/Spinner/Spinner';


function App({setUser, addItems, sidebarHidden, dropdownHidden, checkUser, fetchCollectionsStart}) {

  const ShopMain = lazy(() => import('./pages/ShopMain/ShopMain'));
  const ShopCollectionsPage = lazy(() => import('./pages/ShopCollectionsPage/ShopCollectionsPage'));
  const CollectionPage = lazy(() => import('./pages/CollectionPage/CollectionPage'));
  const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
  const Checkout = lazy(() => import('./pages/Checkout/Checkout'));

  useEffect(() => {
    fetchCollectionsStart();
    checkUser();
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <Dropdown />
      <Header />
      <Switch>
        <Suspense fallback={Spinner}>
          <Route exact path="/" component={ShopMain} />
          <Route exact path="/shop" component={ShopCollectionsPage} />
          <Route path="/shop/:id" component={CollectionPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/checkout" component={Checkout} />
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sidebarHidden: sidebarSelector,
  dropdownHidden: dropdownSelector
})
const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(signIn(user)),
  addItems: (items) => dispatch(addItems(items)),
  checkUser: () => dispatch(checkUser()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
