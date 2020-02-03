import {createSelector} from 'reselect';

const selectCollection = state => state.collections;

export const itemsSelector = createSelector(
  selectCollection,
  collection => collection.items
)