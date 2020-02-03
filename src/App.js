//Dependencies
import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';

//Redux
import {connect} from 'react-redux';
import {signIn} from './redux/user/user-actions'
import {createStructuredSelector} from 'reselect';
import {checkUser} from './redux/user/user-actions';

//Components & Pages
import Header from './components/Header/Header';
import ShopMain from './pages/ShopMain/ShopMain';
import Footer from './components/Footer/Footer';
import CollectionPage from './pages/CollectionPage/CollectionPage';
import ShopCollectionsPage from './pages/ShopCollectionsPage/ShopCollectionsPage';
import SignIn from './pages/SignIn';
import { addItems, fetchCollectionsStart } from './redux/collections/collections-actions';
import Checkout from './pages/Checkout/Checkout';
import Dropdown from './components/Dropdown/Dropdown';
import Sidebar from './components/Sidebar/Sidebar';

//Styling
import './App.css';
import { sidebarSelector, dropdownSelector } from './redux/navigation/navigation-selector';


function App({setUser, addItems, sidebarHidden, dropdownHidden, checkUser, fetchCollectionsStart}) {


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
        <Route exact path="/" component={ShopMain} />
        <Route exact path="/shop" component={ShopCollectionsPage} />
        <Route path="/shop/:id" component={CollectionPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/checkout" component={Checkout} />
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
