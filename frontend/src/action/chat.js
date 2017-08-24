export const userConnected = (payload) => ({
  payload,
  type: 'USER_CONNECTED',
})

export const userDisconnected = (payload) => ({
  payload,
  type: 'USER_DISCONNECTED',
})
export const message = (payload) => ({
  payload,
  type: 'MESSAGE',
})
