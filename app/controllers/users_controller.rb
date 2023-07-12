class UsersController < ApplicationController
    
    def index
        render json: User.all, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] ||= user.id
        render json: user, status: :created
    end

    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end
    
    private

    def user_params
        params.permit(:first_name, :last_name, :avatar, :email, :username, :password, :password_confirmation, :tsa_precheck)
    end
end