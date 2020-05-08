class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authenticate_user

  private

  def authenticate_user
    @jwt = cookies.signed[:jwt]
    @jwt.present? ? current_user : unauthorized
  end

  def current_user
    return @current_user if @current_user

    decoded_id = JsonWebToken.decode(@jwt)
    @current_user = User.find(decoded_id[:user_id])
  rescue ActiveRecord::RecordNotFound
    unauthorized
  end

  def unauthorized
    render json: { errors: 'Unauthorized' }, status: :unauthorized
  end
end
