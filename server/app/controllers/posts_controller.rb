# frozen_string_literal: true

class PostsController < ApplicationController
  skip_before_action :authenticate_user, only: :index

  expose :user, -> { current_user }
  expose :post, -> { user.posts.create(body: post_params[:body]) }
  expose :posts, -> { Post.includes(:comments).where(status: :published) }

  def index
    render 'posts/index', status: :ok
  end

  def create
    return render 'posts/create', status: :created if post.save

    render json: { errors: post.errors }, status: :unprocessable_entity
  end

  private

  def post_params
    params.require(:post).permit(:body)
  end
end
