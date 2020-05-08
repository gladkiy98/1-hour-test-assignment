# frozen_string_literal: true

class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: :create

  expose :user

  def create
    return render 'users/create', status: :created if user.save

    render json: { errors: user.errors }, status: :unprocessable_entity
  end

  private

  def user_params
    params.require(:user).permit(:password, :password_confirmation, :username)
  end
end
