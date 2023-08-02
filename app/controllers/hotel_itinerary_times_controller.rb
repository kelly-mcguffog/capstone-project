class HotelItineraryTimesController < ApplicationController
  before_action :find_itinerary_day, only: [:update, :create]

  def create
      hotel_itinerary_time = @itinerary_day.hotel_itinerary_times.create!(hotel_itinerary_time_params)
      @itinerary_day.combined_itinerary_times << hotel_itinerary_time
      render json: hotel_itinerary_time, status: :created
  end

  def update
    hotel_itinerary_time = @itinerary_day.hotel_itinerary_times.find(params[:id])
    hotel_itinerary_time.update!(hotel_itinerary_time_params)
    render json: hotel_itinerary_time, status: :ok
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

  def find_itinerary_day
    @itinerary_day = ItineraryDay.find(params[:id])
  end
  
end