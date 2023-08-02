class HotelsController < ApplicationController
       
    def index
        hotels = Hotel.all
        render json: hotels, status: :ok
    end

    private

    def hotel_params
        params.permit(:name, :description, :average_price, :rating, :phone_number, :address, :latitude, :longitude, :photo1, :photo2, :photo3, :url, :destination_id)
    end
    
end

