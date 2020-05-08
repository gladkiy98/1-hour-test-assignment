import React, { Component } from 'react'
import UserPostsComponent from '../components/UserPostsComponent'
import HeaderContainer from '../containers/HeaderContainer'
import axios from 'axios'

axios.defaults.withCredentials = true

class UserPostsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      body: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/user_posts')
      .then(res => {
        this.setState({ posts: res.data })
      })
  }

  addPost = () => {
    axios.post('http://localhost:3000/posts', {
        post: {
          body: this.state.body
        }
      })
      .then(res => {
        this.setState({ posts: res.data })
      })
  }

  changeStatus = post_id => () => {
    axios.post('http://localhost:3000/user_posts', {
        post_id
      })
      .then(res => {
        this.setState({ posts: res.data })
      })
  }

  handleChange = event => {
    this.setState({ body: event.target.value })
  }

  render() {
    const { posts, body } = this.state

    return (
      <>
        <HeaderContainer />
        <UserPostsComponent
            posts={posts}
            body={body}
            addPost={this.addPost}
            changeStatus={this.changeStatus}
            handleChange={this.handleChange} />
        />
      </>
    )
  }
}

export default UserPostsContainer
