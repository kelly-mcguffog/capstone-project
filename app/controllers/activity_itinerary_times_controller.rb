class ActivityItineraryTimesController < ApplicationController
    def index
        render json: ActivityItineraryTime.all, status: :ok
    end
    def create
        new_activity = ActivityItineraryTime.create!(book_params)
        render json: new_activity, status: :created
    end
    def destroy
        itinerary_day = ItineraryDay.find(params[:id])
        activity_itinerary_time = itinerary_day.activity_itinerary_times.find(params[:activity_itinerary_time_id])
        activity_itinerary_time.destroy
        head :no_content
      end
      

    private

    def activity_itinerary_time_params
        params.permit(:time, :activity_id, :itinerary_day_id)
    end
end
