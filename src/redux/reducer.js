import {
  SET_AT_TOP,
  SET_IS_MOBILE,
  SET_IS_TABLET,
  SET_SHOW_MOBILE_MENU,
  SET_SITE_READY,
  SET_TOAST,
} from "./types"

const initialState = {
  isMobile: null,
  isTablet: null,
  showMobileMenu: false,
  atTop: null,
  siteReady: false,
  toast: {
    open: false,
    severity: "success",
    msg: "",
  },
}

export const reducer = (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state)

  //DEBUGGING
  // console.log(type, payload)

  switch (type) {
    case SET_IS_MOBILE:
      newState.isMobile = payload
      break
    case SET_IS_TABLET:
      if (!newState.isMobile) {
        newState.isTablet = payload
      }
      break
    case SET_SHOW_MOBILE_MENU:
      newState.showMobileMenu = payload
      break
    case SET_AT_TOP:
      newState.atTop = payload
      break
    case SET_SITE_READY:
      newState.siteReady = payload
      break
    case SET_TOAST:
      newState.toast = payload
      break
    default:
      break
  }
  return newState
}
