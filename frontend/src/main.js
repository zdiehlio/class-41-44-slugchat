import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'
import {Provider} from 'react-redux'
import storeCreate from './lib/store-create'
import io from './lib/io.js'

import userSubcribers from '.subscribe/user.js'
import messageSubscribers from './subscribe/message.js'

const store = storeCreate()

io

let AppContainer = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDom.render( <AppContainer/>, document.getElementById('root'))
