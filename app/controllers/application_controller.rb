class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :data_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  # before_action :authorized
  
  def data_invalid(invalid)
    render json: { errors: invalid.record.errors.messages }, status: :unprocessable_entity
  end
  
  def not_found
    render json: {error: "Not found"}, status: :not_found
  end

  def authorized
    return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end

end
