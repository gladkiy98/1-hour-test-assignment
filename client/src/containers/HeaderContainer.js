import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

axios.defaults.withCredentials = true

class HeaderContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      loggedIn: false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/auth')
      .then(res => (
        this.setState({ user: res })
      ))
  }

  logOut = () => {
    axios.delete('http://localhost:3000/auth')
  }

  render() {
    console.log(this.state.user)
    return (
      <div>
        {Object.keys(this.state.user).length > 0 ?
          <div>
            Hi, {this.state.user.data.user.username}
            <NavLink
              exact
              to={'/manage'}>
            Posts manage
          </NavLink>
          <NavLink
              exact
              to={'/'}>
            Home
          </NavLink>
          <form onSubmit={this.logOut}>
            <input type='submit' value='Log Out' />
          </form>
          </div>
          :
          <>
            <NavLink
                exact
                to={'/signin'}>
              SignIn
            </NavLink>
            <NavLink
                exact
                to={'/signup'}>
              SignUp
            </NavLink>
            <NavLink
                exact
                to={'/'}>
              Home
            </NavLink>
          </>
        }
      </div>
    )
  }
}

export default HeaderContainer
