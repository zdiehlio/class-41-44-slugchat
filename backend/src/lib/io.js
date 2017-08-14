import io from 'socket.io'

export default (http, subscribers) => {
  return io(http)
    .on('connection', (socket) => {
      Object.keys(subscribers)
        .map(type => ({type, handler: subscribers[type]}))
        .forEach(subscriber => {
          socket.on(subscriber.type, (payload) => {
            console.log('__NINJA__', payload)
            subscriber.handler(socket)(payload)
          })
        })
      console.log('Totally Ninja!')
      socket.emit('Totally Ninja!', 'Greeting from Server')
    })
    .on('error', (error) => {
      console.log('__SOCKET_IO_ERROR__', error)
    })
}
