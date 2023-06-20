class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :data_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  
  def data_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
  
  def not_found
    render json: {error: "Not found"}, status: :not_found
  end

end
