import io from 'socket.io-client'

export const socket = io(`${__API_URL__}`)

export const reduxIO = (store) => (next) => (action) => {
  if(typeof action === 'object')
    socket.emit(action.type, action.payload)
  next(action)
}

export default (store, subscribers) => {
  Object.keys(subscribers)
    .map(type => ({type, handler: subscribers[type]}))
    .forEach(subscriber => {
      socket.on(subscriber.type, (payload) => {
        try {
          let fakerStore = {
            dispatch: (action) => {
              action.blockPublish = true
              return store.dispatch(action)
            getState: () => store.getState()
          },
          subscriber.handler(store)(socket)(payload)
      } catch(error) {
        console.log('___SUBSCRIBE_ERROR___', error);
      }
      })
    })
}
