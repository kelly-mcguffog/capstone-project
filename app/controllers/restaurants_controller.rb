class RestaurantsController < ApplicationController
    def index
        render json: Restaurant.all, status: :ok
    end

    def show
        render json: find_restaurant, status: :ok
    end

    private

    def restaurant_params
        params.permit(:name, :cuisine, :description, :average_price, :rating, :address, :latitude, :longitude, :photo, :reservation_link, :destination_id)
    end

    def find_restaurant
        @restaurant = Restaurant.find(params[:id])
    end

end
