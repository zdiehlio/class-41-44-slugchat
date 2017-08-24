import superagent from 'superagent'
import * as util from '../lib/util.js'

export const login = (token) => ({
  type: 'LOGIN',
  payload: token,
})

export const logout = () => {
  util.cookieDelete('X-Mythicchat-Token')
  return  { type: 'LOGOUT'}
}

export const loginRequest = (user) => (dispatch) => {
  return superagent.get(`${__API_URL__}/login`)
    .withCredentials()
    .auth(user.username, user.password)
    .then(res => {
      let token = util.cookieFetch('X-Mythicchat-Token')
      if(token)
        dispatch(login(token))
      return res
    })
    .catch(util.logError)
}

export const signupRequest = (user) => (dispatch) => {
  return superagent.post(`${__API_URL__}/signup`)
    .withCredentials()
    .send(user)
    .then(res => {
      let token = util.cookieFetch('X-Mythicchat-Token')
      if(token)
        dispatch(login(token))
      return res
    })
    .catch(util.logError)
}
