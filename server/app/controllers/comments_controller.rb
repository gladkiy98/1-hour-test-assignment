# frozen_string_literal: true

class CommentsController < ApplicationController
  skip_before_action :authenticate_user, only: :create

  expose :post, -> { Post.find(comment_params[:post_id]) }
  expose :comment, -> { Comment.create(commentable: post, body: comment_params[:body]) }
  expose :posts, -> { Post.all }

  def create
    return render 'posts/index', status: :created if comment.save

    render json: { errors: comment.errors }, status: :unprocessable_entity
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end
end
