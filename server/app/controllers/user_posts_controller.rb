# frozen_string_literal: true

class UserPostsController < ApplicationController
  expose :user, -> { current_user }
  expose :posts, -> { user.posts }
  expose :post

  def index
    render 'user_posts/index', status: :ok
  end

  def create
    return render 'user_posts/index', status: :created if post.published!

    render json: { errors: post.errors }, status: :unprocessable_entity
  end

  private

  def post_params
    params.require(:post).permit(:body)
  end
end
