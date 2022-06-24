import { SET_IS_MOBILE, SET_SHOW_MOBILE_MENU } from "./types"

export const setIsMobile = (payload) => ({
  type: SET_IS_MOBILE,
  payload,
})

export const setShowMobileMenu = (payload) => ({
  type: SET_SHOW_MOBILE_MENU,
  payload,
})
