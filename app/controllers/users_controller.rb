class UsersController < ApplicationController
    def create
        user = User.create!(user_params)
        session[:user_id] ||= user.id
        render json: user, status: :created
    end

    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    # def index
    #     render json: User.all, include: [
    #       'trips',
    #       'trips.itinerary_days',
    #       ['trips.itinerary_days.hotel_itinerary_times', 'trips.itinerary_days.hotel_itinerary_times.hotel'],
    #       ['trips.itinerary_days.restaurant_itinerary_times', 'trips.itinerary_days.restaurant_itinerary_times.restaurant'],
    #       ['trips.itinerary_days.activity_itinerary_times', 'trips.itinerary_days.activity_itinerary_times.activity']
    #     ], status: :ok
    #   end

    def index
        render json: User.all, include: ["trips", "trips.destination"],status: :ok
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :username, :password, :password_confirmation, :tsa_precheck)
    end
end