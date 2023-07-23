class RestaurantItineraryTimesController < ApplicationController
    
    def index
        render json: RestaurantItineraryTime.all, status: :ok
    end

    def create
        itinerary_day = ItineraryDay.find(params[:itinerary_day_id])
        restaurant_itinerary_time = itinerary_day.restaurant_itinerary_times.create!(restaurant_itinerary_time_params)
        render json: restaurant_itinerary_time, status: :created
    end

    def destroy
        restaurant_itinerary_time = RestaurantItineraryTime.find(params[:id])
        restaurant_itinerary_time.destroy
        head :no_content
    end

    private

    def restaurant_itinerary_time_params
        params.require(:restaurant_itinerary_time).permit(:time, :restaurant_id, :itinerary_day_id)
    end

end