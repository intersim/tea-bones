'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import GoogleLogin from './components/GoogleLogin'
import WhoAmI from './components/WhoAmI'
import Teas from './components/Teas'
import { fetchTeas } from './reducers/teas';

const loadTeas = nextRouterState => store.dispatch(fetchTeas())

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <span><Login/> <GoogleLogin /></span>}
      </nav>
      {children}
    </div>
)

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/jokes" />
        <Route path="/jokes" component={Jokes} />
        <Route path="/teas" component={Teas} onEnter={loadTeas} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
