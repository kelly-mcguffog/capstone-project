class ActivityItineraryTimesController < ApplicationController
    def index
        render json: ActivityItineraryTime.all, status: :ok
    end
    def create
        activity_itinerary_time = ActivityItineraryTime.create!(activity_itinerary_time_params)
        render json: activity_itinerary_time, status: :created
    end
    def destroy
        activity_itinerary_time = ActivityItineraryTime.find(params[:activity_itinerary_time_id])
        activity_itinerary_time.destroy
        head :no_content
      end
      

    private

    def activity_itinerary_time_params
        params.permit(:time, :activity_id, :itinerary_day_id)
    end
end
