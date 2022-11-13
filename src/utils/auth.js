import Cookies from 'js-cookie'

const TokenKey = 'hrsaas-51-token'

const TimeKey = 'hrsaas-51-time'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setTime() {
  Cookies.set(TimeKey, +new Date())
}

export function getTime() {
  return Cookies.get(TimeKey)
}
