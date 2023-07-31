class ActivityItineraryTimesController < ApplicationController

    def index
        render json: ActivityItineraryTime.all, status: :ok
    end
  
    def create
        itinerary_day = ItineraryDay.find(params[:itinerary_day_id])
        activity_itinerary_time = itinerary_day.activity_itinerary_time.create!(activity_itinerary_time_params)
        itinerary_day.combined_itinerary_times << activity_itinerary_time
        render json: hotel_itinerary_time, status: :created
    end
  
    def destroy
        activity_itinerary_time = ActivityItineraryTime.find(params[:id])
        activity_itinerary_time.destroy
        head :no_content
    end

    def update
        itinerary_day = ItineraryDay.find(params[:itinerary_day_id])
        activity_itinerary_time = itinerary_day.activity_itinerary_times.find(params[:id])
        activity_itinerary_time.update!(activity_itinerary_time_params)
        render json: activity_itinerary_time, status: :ok
      end
  
    private
  
    def activity_itinerary_time_params
        params.require(:activity_itinerary_time).permit(:time, :activity_id, :itinerary_day_id)
    end
    
  end