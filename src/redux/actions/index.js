import { SAVE_NAME, SEARCH_PHOTO, GET_TOKEN } from '../constants'


export function saveName(payload) {
  return { type: SAVE_NAME, payload }
}

export function searchPhoto(payload) {
  return { type: SEARCH_PHOTO, payload}
}

export function getToken(payload) {
  return { type: GET_TOKEN, payload}
}