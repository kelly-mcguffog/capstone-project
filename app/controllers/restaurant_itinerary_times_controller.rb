class RestaurantItineraryTimesController < ApplicationController
    def index
        render json: RestaurantItineraryTime.all, status: :ok
    end

    def show
        restaurant_itinerary_time = RestaurantItineraryTime.find(params[:restaurant_itinerary_time_id])
        render json: restaurant_itinerary_time, status: :ok
    end

    def create
        restaurant = RestaurantItineraryTime.create!(restaurant_itinerary_time_params)
        render json: restaurant, status: :created
    end

    def destroy
        # restaurant_itinerary_time = RestaurantItineraryTime.find(params[:restaurant_itinerary_time_id])
        # restaurant_itinerary_time.destroy
        # head :no_content
        itinerary_day = ItineraryDay.find(params[:id])
        restaurant_itinerary_time = itinerary_day.restaurant_itinerary_times.find(params[:restaurant_itinerary_time_id])
        restaurant_itinerary_time.destroy
        head :no_content
      end

    private

    def restaurant_itinerary_time_params
        params.permit(:time, :restaurant_id, :itinerary_day_id)
    end
end
