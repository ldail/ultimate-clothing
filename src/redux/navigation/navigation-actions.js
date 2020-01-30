import navigationTypes from "./navigation-types";

export const sidebarHiddenToggle = () => ({
  type: navigationTypes.SIDEBAR_HIDDEN,
})

export const dropdownHiddenToggle = () => ({
  type: navigationTypes.DROPDOWN_HIDDEN
})