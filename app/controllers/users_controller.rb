class UsersController < ApplicationController
    
    skip_before_action :authorized, only: [:show, :create]

    def index
        users = User.includes(trips: :packing_list_items)
        render json: users, include: ["trips", "trips.packing_list_items", "trips", "trips.itinerary_days"], status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] ||= user.id
        render json: user, include: ["trips", "trips.itinerary_days", "trips", "trips.itinerary_days"], status: :created
    end

    def show
        user = User.includes(trips: :packing_list_items).find(session[:user_id])
        render json: user, include: ["trips", "trips.packing_list_items", "trips", "trips.itinerary_days"], status: :ok
    end      

    def update
        user = User.find(session[:user_id])
        user.update!(user_params)
        render json: user, status: :ok
    end

    def update_password
        user = User.find(session[:user_id])
        if user.authenticate(params[:current_password]) && user.update(user_params_for_password_update)
          render json: { message: "Password updated successfully." }, status: :ok
        else
          render json: { error: "Invalid current password or unable to update the password." }, status: :unprocessable_entity
        end
      end
    
    private

    def user_params
        params.permit(:first_name, :last_name, :avatar, :email, :username, :password, :password_confirmation, :tsa_precheck)
    end

    def user_params_for_password_update
        params.permit(:password, :password_confirmation)
    end

end