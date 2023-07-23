class HotelItineraryTimesController < ApplicationController
  
  def index
      render json: HotelItineraryTime.all, status: :ok
  end

  def create
      itinerary_day = ItineraryDay.find(params[:itinerary_day_id])
      hotel_itinerary_time = itinerary_day.hotel_itinerary_times.create!(hotel_itinerary_time_params)
      render json: hotel_itinerary_time, status: :created
  end

  def destroy
      hotel_itinerary_time = HotelItineraryTime.find(params[:id])
      hotel_itinerary_time.destroy
      head :no_content
  end

  private

  def hotel_itinerary_time_params
      params.require(:hotel_itinerary_time).permit(:time, :hotel_id, :itinerary_day_id)
  end
  
end