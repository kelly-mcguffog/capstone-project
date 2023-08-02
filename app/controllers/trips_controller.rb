class TripsController < ApplicationController
  
    before_action :find_trip, only: [:update, :destroy]

    def create
        trip = Trip.create!(trip_params)
        render json: trip, include: ["itinerary_days", "itinerary_days.combined_itinerary_times"], status: :created
    end

    def update
        @trip.update!(trip_params)
        render json: @trip, include: ["itinerary_days", "itinerary_days.combined_itinerary_times"], status: :ok

    end

    def destroy
      @trip.destroy
      head :no_content
    end

    private

    def trip_params
      params.require(:trip).permit(:origin_airport, :destination_airport, :outbound_flight, :return_flight, :outbound_flight_number, :return_flight_number, :confirmation_number, :user_id, :destination_id)
    end

    def find_trip
      @trip = Trip.find(params[:id])
    end

  end
