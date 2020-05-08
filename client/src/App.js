import React, { Component } from 'react'
import {
  Route,
  Switch,
  Router
} from 'react-router-dom'
import PostsContainer from './containers/PostsContainer'
import SignInContainer from './containers/SignInContainer'
import SignUpContainer from './containers/SignUpContainer'
import UserPostsContainer from './containers/UserPostsContainer'
import history from './lib/history'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
              exact path={'/'}
              component={PostsContainer} />
          <Route
              exact path={'/signin'}
              component={SignInContainer} />
          <Route
              exact path={'/manage'}
              component={UserPostsContainer} />
          <Route
              exact path={'/signup'}
              component={SignUpContainer} />
        </Switch>
      </Router>
    )
  }
}

export default App
