class HotelItineraryTimesController < ApplicationController
    def index
        render json: HotelItineraryTime.all, status: :ok
    end
    def create
        hotel_itinerary_time = HotelItineraryTime.create!(hotel_itinerary_time_params)
        render json: hotel_itinerary_time, status: :created
    end
    def destroy
        hotel_itinerary_time = HotelItineraryTime.find(params[:hotel_itinerary_time_id])
        hotel_itinerary_time.destroy
        head :no_content
      end
      
      

    private

    def hotel_itinerary_time_params
        params.permit(:time, :hotel_id, :itinerary_day_id)
    end
end
