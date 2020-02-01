import React from 'react';
import ShopItem from '../../components/ShopItem/ShopItem';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const ShopCollectionsPage = ({collections}) => {

  const displayItemsWithLimit = (collection, limit) => {
    let displayItems = [];
    for (let i=0; i<limit;i++) {
      displayItems.push(<ShopItem key={i} collectionTitle={collection.title} collectionInfo={collection.items[i]} />);
    }
    return displayItems;
  }

  return (
    <main id="ShopCollectionsPage">
      {collections.map(collection => {
        return (
        <>
          <h2><Link to={`/shop/${collection.title.toLowerCase()}`}>{collection.title.toUpperCase()}</Link></h2>
          <ul className="collectionItems">
            {displayItemsWithLimit(collection, 4)}
            }
          </ul>
        </>);
      })}
    </main>
  );
};

const mapStateToProps = state => ({
  collections: state.collections.items
})

export default connect(mapStateToProps, null)(ShopCollectionsPage);