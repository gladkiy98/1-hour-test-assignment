import React, { PureComponent } from 'react'

class UserPostsComponent extends PureComponent {
  render() {
    const { posts, body, addPost, handleChange, changeStatus } = this.props

    return (
      <div>
        <form onSubmit={addPost}>
          <label>
            Add post
            <input type='text' value={body} onChange={handleChange} />
          </label>
          <input type='submit' value='Add post' />
        </form>
        <h1>
          My posts
        </h1>
        {posts.map(item =>
          <div>
            <h2>
              Post {item.post.id}
            </h2>
            {item.post.status === 'published' ?
              <>
              </>
              :
              <form onSubmit={changeStatus(item.post.id)}>
                <input type='submit' value='Publish' />
              </form>
            }
            <p>
            {item.post.body}
            </p>
          </div>
        )}
      </div>

    )
  }
}

export default UserPostsComponent
