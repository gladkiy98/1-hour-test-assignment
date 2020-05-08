import React, { Component } from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import axios from 'axios'

axios.defaults.withCredentials = true

class SignUpContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      password_confirmation: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  signUp = () => {
    axios.post('http://localhost:3000/users', {
      user: {
        username: this.state.username,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      }
      })
      .then(this.props.history.push('/'))
  }

  render() {
    return (
      <>
        <HeaderContainer />
        <div>
          <form onSubmit={this.signUp}>
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
            <input
                type='password_confirmation'
                id='password_confirmation'
                value={this.state.password_confirmation}
                autoComplete="new-password"
                onChange={this.handleChange}
                name='password_confirmation'
                required />
              <input type='submit' value='Sign Up' />
          </form>
        </div>
      </>
    )
  }
}

export default SignUpContainer
