import React, { Component } from 'react'
import PostsComponent from '../components/PostsComponent'
import HeaderContainer from '../containers/HeaderContainer'
import axios from 'axios'

axios.defaults.withCredentials = true

class PostsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      body: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/posts')
      .then(res => {
        this.setState({ posts: res.data })
      })
  }

  addComment = (post_id, body) => () => {
    axios.post('http://localhost:3000/comments', {
        comment: {
          body,
          post_id
        }
      })
      .then(res => {
        this.setState({ posts: res.data })
      })
  }

  render() {
    const { posts, body } = this.state

    return (
      <>
        <HeaderContainer />
        <PostsComponent
            posts={posts}
            body={body}
            addComment={this.addComment}
            handleChange={this.handleChange} />
      </>
    )
  }
}

export default PostsContainer
