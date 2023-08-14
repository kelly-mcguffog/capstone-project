class SessionsController < ApplicationController
   
    skip_before_action :authorized, only: [:create, :destroy]

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] ||= user.id
            render json: user, include: ["trips", "trips.packing_list_items", "trips", "trips.itinerary_days"], status: :ok
        else
            render json: {error: "Username or password not found. Please try again."}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end
