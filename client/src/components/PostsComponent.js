import React, { Component } from 'react'

class PostsComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      body: ''
    }
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { posts, addComment } = this.props
    const { body } = this.state

    return (
      <div>
        <h1>
          Posts
        </h1>
        {posts.map(item =>
          <div key={item.id}>
            <h2>
              Post {item.post.id}
            </h2>
            <p>
            {item.post.body}
            </p>
            <h4>
              Comments
            </h4>
            <form onSubmit={addComment(item.post.id, body)}>
              <label>
                Add comment
                <input name='body' type='text' value={body} onChange={this.handleChange} />
              </label>
              <input type='submit' value='Add comment' />
            </form>
            {item.post.comments.length}
            {item.post.comments.map(item =>
              <div key={item.key}>
                {item.comment.body}
              </div>
            )}
          </div>
        )}
      </div>

    )
  }
}

export default PostsComponent
