class RestaurantsController < ApplicationController
    
    def index
        render json: Restaurant.all, status: :ok
    end

    private

    def restaurant_params
        params.permit(:name, :cuisine, :description, :phone_number, :average_price, :rating, :address, :latitude, :longitude, :photo1, :photo2, :photo3, :url, :destination_id)
    end

end
