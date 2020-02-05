import {createSelector} from 'reselect';

const selectNavigation = state => state.navigation;

export const dropdownSelector = createSelector(
  selectNavigation,
  navigation => navigation.dropdownHidden
);

export const sidebarSelector = createSelector(
  selectNavigation,
  navigation => navigation.sidebarHidden
)

export const successReceiptSelector = createSelector(
  selectNavigation,
  navigation => navigation.successReceipt
)