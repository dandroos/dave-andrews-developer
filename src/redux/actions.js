import {
  SET_AT_TOP,
  SET_IS_MOBILE,
  SET_SHOW_MOBILE_MENU,
  SET_SITE_READY,
} from "./types"

export const setIsMobile = (payload) => ({
  type: SET_IS_MOBILE,
  payload,
})

export const setShowMobileMenu = (payload) => ({
  type: SET_SHOW_MOBILE_MENU,
  payload,
})

export const setAtTop = (payload) => ({
  type: SET_AT_TOP,
  payload,
})

export const setSiteReady = (payload) => ({
  type: SET_SITE_READY,
  payload,
})
