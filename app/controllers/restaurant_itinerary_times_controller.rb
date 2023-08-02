class RestaurantItineraryTimesController < ApplicationController
    before_action :find_itinerary_day, only: [:update, :create]

    def create
        restaurant_itinerary_time = @itinerary_day.restaurant_itinerary_times.create!(restaurant_itinerary_time_params)
        @itinerary_day.combined_itinerary_times << restaurant_itinerary_time
        render json: restaurant_itinerary_time, status: :created
      end

    def destroy
        restaurant_itinerary_time = RestaurantItineraryTime.find(params[:id])
        restaurant_itinerary_time.destroy
        head :no_content
    end

    def update
        restaurant_itinerary_time = @itinerary_day.restaurant_itinerary_times.find(params[:id])
        restaurant_itinerary_time.update!(restaurant_itinerary_time_params)
        render json: restaurant_itinerary_time, status: :ok
      end

    private

    def restaurant_itinerary_time_params
        params.require(:restaurant_itinerary_time).permit(:time, :restaurant_id, :itinerary_day_id)    
    end

    def find_itinerary_day
        @itinerary_day = ItineraryDay.find(params[:id])
    end
end