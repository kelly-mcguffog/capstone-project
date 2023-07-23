class UsersController < ApplicationController
    
    skip_before_action :authorized, only: [:show, :create]

    def index
        users = User.all
        render json: users, include: ["trips", "trips.itinerary_days"], status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] ||= user.id
        render json: user, include: ["trips", "trips.itinerary_days"], status: :created
    end

    def show
        user = User.find(session[:user_id])
        render json: user, include: ["trips", "trips.itinerary_days"], status: :ok
    end      

    def update
        user = User.find(session[:user_id])
        user.update!(user_params)
        render json: user, status: :ok
    end
    
    private

    def user_params
        params.permit(:first_name, :last_name, :avatar, :email, :username, :password, :password_confirmation, :tsa_precheck)
    end

end