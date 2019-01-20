import { SEARCH_PHOTO, GET_LOGIN_CODE, SILENT_LOGIN, DEBUG } from '../constants'


export function getLoginCode() {
  return { type: GET_LOGIN_CODE }
}

export function searchPhoto(payload) {
  return { type: SEARCH_PHOTO, payload}
}

export function silentLogin() {
  return { type: SILENT_LOGIN}
}

export function debug() {
  return { type: DEBUG }
}