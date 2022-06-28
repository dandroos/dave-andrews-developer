import { SET_AT_TOP, SET_IS_MOBILE, SET_SHOW_MOBILE_MENU } from "./types"

const initialState = {
  isMobile: null,
  showMobileMenu: false, //change to false
  atTop: null,
}

export const reducer = (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state)

  //DEBUGGING
  console.log(type, payload)

  switch (type) {
    case SET_IS_MOBILE:
      newState.isMobile = payload
      break
    case SET_SHOW_MOBILE_MENU:
      newState.showMobileMenu = payload
      break
    case SET_AT_TOP:
      newState.atTop = payload
      break
    default:
      break
  }
  return newState
}
