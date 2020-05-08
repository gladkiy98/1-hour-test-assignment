# frozen_string_literal: true

class AuthenticationsController < ApplicationController
  skip_before_action :authenticate_user, only: :create
  expose :blogger, -> { User.find_by(username: params[:username]) }

  def create
    if blogger&.authenticate(params[:password])
      generate_token
      cookies.signed[:jwt] = {
        value: generate_token,
        httponly: true,
        expires: 24.hours.from_now
      }
      render json: { user: blogger }, status: 201
    else
      render json: { errors: 'Username or password incorrect' }, status: 404
    end
  end

  def destroy
    cookies.delete(:jwt)
    render json: {}, status: 200
  end

  def show
    render json: { user: current_user }, status: 200
  end

  private

  def generate_token
    JsonWebToken.encode(user_id: blogger.id)
  end
end
