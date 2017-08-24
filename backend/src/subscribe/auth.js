import User from '../model/user.js'

const LOGIN = (socket) => (payload) => {
  console.log('token', payload)
  User.fromToken(payload)
    .then(user => {
      socket.username = user.username
      let result = {
        username: socket.username,
        content: `${username} connected to server`,
        meta: true,
      }
      socket.broadcast.emit('USER_CONNECTED', result)
    })
}

const LOGOUT = (socket) => (payload) => {
  let result = {
    username: socket.username,
    content: `${username} connected to server`,
    meta: true,
  }
  socket.broadcast.emit('USER_DISCONNECTED', result)
  delete socket.username
}

export default {LOGIN, LOGOUT}
