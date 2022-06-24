import { SET_IS_MOBILE, SET_SHOW_MOBILE_MENU } from "./types"

const initialState = {
  isMobile: null,
  showMobileMenu: true, //change to false
}

export const reducer = (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state)

  switch (type) {
    case SET_IS_MOBILE:
      newState.isMobile = payload
      break
    case SET_SHOW_MOBILE_MENU:
      newState.showMobileMenu = payload
      break
    default:
      break
  }
  return newState
}
