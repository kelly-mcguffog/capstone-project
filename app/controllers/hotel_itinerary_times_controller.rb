class HotelItineraryTimesController < ApplicationController
    def index
        render json: HotelItineraryTime.all, status: :ok
    end
    def create
        hotel = HotelItineraryTime.create!(hotel_itinerary_time_params)
        render json: hotel, status: :created
    end
    def destroy
        itinerary_day = ItineraryDay.find(params[:id])
        hotel_itinerary_time = itinerary_day.hotel_itinerary_times.find(params[:hotel_itinerary_time_id])
        hotel_itinerary_time.destroy
        head :no_content
      end
      
      

    private

    def hotel_itinerary_time_params
        params.permit(:time, :hotel_id, :itinerary_day_id)
    end
end
