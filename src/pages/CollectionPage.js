import React from 'react';
import ShopItem from '../components/ShopItem/ShopItem';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const CollectionPage = ({match,collections}) => {
  let currentPage = match.params.id;
  console.log(collections);
  return (
      <main id="CollectionPage">
        <h2>{currentPage.toUpperCase()}</h2>
        <ul>
          {collections?.items.map((item,index) => <ShopItem key={index}collectionTitle={collections?.title} collectionInfo={item} />)}
        </ul>
      </main>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: state.collections.items.find(collection => collection.title.toLowerCase() === ownProps.match.params.id.toLowerCase())
})

export default withRouter(connect(mapStateToProps, null)(CollectionPage));