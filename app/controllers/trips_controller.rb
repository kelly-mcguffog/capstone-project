class TripsController < ApplicationController
    
    def index
        render json: Trip.all, include: ["itinerary_days", "itinerary_days.combined_itinerary_times"], status: :ok
    end

    def show
        trip = Trip.find(params[:id])
        render json: trip, include: ["itinerary_days", "itinerary_days.combined_itinerary_times"], status: :ok
    end

    def create
        trip = Trip.create!(trip_params)
        render json: trip, include: ["itinerary_days", "itinerary_days.combined_itinerary_times"], status: :created
    end

    def destroy
      trip = Trip.find(params[:id])
      trip.destroy
      head :no_content
    end

    private

    def trip_params
      params.require(:trip).permit(:origin_airport, :destination_airport, :outbound_flight, :return_flight, :outbound_flight_number, :return_flight_number, :confirmation_number, :user_id, :destination_id)
    end
    
  end
