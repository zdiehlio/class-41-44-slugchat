export default (state=[], {type, payload}) => {
  switch(type) {
  case 'LOGIN':
    return [...state, {
      content: 'you joined chat',
      meta: true,
    }]
  case 'LOGOUT':
    return []
  case 'MESSAGE':
    return [...state, payload]
  case 'USER_CONNECTED':
    return [...state, payload]
  case 'USER_DISCONNECTED':
    return [...state, payload]
  default:
    return state
  }
}
