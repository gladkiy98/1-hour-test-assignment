import React, { Component } from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import axios from 'axios'

axios.defaults.withCredentials = true

class SignInContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  signIn = () => {
    axios.post('http://localhost:3000/auth', {
      username: this.state.username,
      password: this.state.password
      })
      .then(this.props.history.push('/'))
  }

  render() {
    return (
      <>
        <HeaderContainer />
        <div>
          <form onSubmit={this.signIn}>
            <input
                type='text'
                id='username'
                name='username'
                value={this.state.username}
                onChange={this.handleChange}
                required />
            <input
                type='password'
                id='password'
                value={this.state.password}
                autoComplete="new-password"
                onChange={this.handleChange}
                name='password'
                required />
              <input type='submit' value='Sign In' />
          </form>
        </div>
      </>
    )
  }
}

export default SignInContainer
