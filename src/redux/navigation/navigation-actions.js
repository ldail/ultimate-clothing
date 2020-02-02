import navigationTypes from "./navigation-types";

export const sidebarHiddenToggle = () => ({
  type: navigationTypes.SIDEBAR_HIDDEN,
})

export const dropdownHiddenToggle = () => ({
  type: navigationTypes.DROPDOWN_HIDDEN
})

export const hideDropdownAndSidebar =() => ({
  type: navigationTypes.HIDE_DROPDOWN_AND_SIDEBAR
})