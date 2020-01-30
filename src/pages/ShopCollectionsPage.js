import React from 'react';
import ShopItem from '../components/ShopItem/ShopItem';
import {connect} from 'react-redux';

const ShopCollectionsPage = ({collections}) => {

  const displayItemsWithLimit = (collection, limit) => {
    let displayItems = [];
    for (let i=0; i<limit;i++) {
      displayItems.push(<ShopItem collectionTitle={collection.title} collectionInfo={collection.items[i]} />);
    }
    return displayItems;
  }
  console.log(collections);
  return (
    <main id="ShopCollectionsPage">
      {collections.map(collection => {
        return (
        <>
          <h2>{collection.title.toUpperCase()}</h2>
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