# # require 'rest-client'
# require 'dotenv/load'

class HotelsController < ApplicationController
    def index
        hotels = Hotel.all
        render json: hotels, status: :ok
    end

    def show
        hotel = Hotel.find(params[:id])
        render json: hotel, status: :ok
    end

    def create
        hotel = Hotel.create!(hotel_params)
        render json: hotel, status: :created
    end

    private

    def hotel_params
        params.permit(:name, :description, :average_price, :rating, :address, :latitude, :longitude, :photo, :reservation_link, :destination_id)
    end

    def find_hotel
        @hotel = Hotel.find(params[:id])
    end
    
end

