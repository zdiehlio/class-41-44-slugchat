import React from 'react'
import {connect} from 'react-redux'
import {MemoryRouter, Switch, Route} from 'react-router-dom'
import * as util from '../../lib/util.js'
import * as auth from '../../action/auth.js'
import * as route from '../../action/route.js'

import LandingContainer from '../landing-container'
import SignupContainer from '../signup-container'

class App extends React.Component {
  componentDidMount(){
    let token = util.cookieFetch('X-Mythicchat-Token')
    if(token)
      this.props.login(token)
  }
  render(){
    return(
      <div className='app'>
        <header>
          <div className='toolbar'>
            <button className='logo'
              onClick={this.toggleMenu}
              className='logo'>
              Mythic Chat
            </button>
            <button
              className='chat'
              onClick={this.toggleChat}>
              show/hide Chat
            </button>
          </div>
          {util.renderIf(this.props.token,
            <div className='menu'>
              <button onClick={this.props.goToSettings}>Settings</button>
              <button onClick={this.props.goToChat}>Chat</button>
              <button onClick={this.props.logout}>logout</button>
            </div>
          )}
        </header>
        <MemoryRouter>
          <Switch location={{pathname: this.props.route}}>
            <Route path='/landing' component={LandingContainer} />
            <Route path='/chat' component={() => <p> chat </p>} />
            <Route path='/signup' component={SignupContainer} />
            <Route path='/login' component={() => <p> login </p>} />
            <Route path='/settings' component={() => <p> settings </p>} />
          </Switch>
        </MemoryRouter>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  token: state.token,
  route: state.route,
})

let mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(auth.logout()),
  login: (token) => dispatch(auth.login(token)),
  goToChat: () => dispatch(route.switchRoute('/chat')),
  goToSettings: () => dispatch(route.switchRoute('/settings')),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
