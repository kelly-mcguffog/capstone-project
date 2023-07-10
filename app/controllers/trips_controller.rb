class TripsController < ApplicationController
    def index
        render json: Trip.all, status: :ok
    end

    def show
        trip = Trip.find(params[:id])
        render json: trip, status: :ok
    end

    def create
        trip = Trip.create!(trip_params)
        render json: trip, status: :created
    end

    def destroy
      trip = Trip.find(params[:id])
      trip.destroy
      head :no_content
    end

    private

    def trip_params
        params.require(:trip).permit(
          :origin_airport,
          :destination_airport,
          :outbound_flight,
          :return_flight,
          :outbound_flight_number,
          :return_flight_number,
          :confirmation_number,
          :user_id,
          :destination_id,
          itinerary_days: [
            :date,
            :trip_id,
            hotel_itinerary_times: [
              :time,
              :hotel_id,
              :itinerary_day_id,
            ],
            activity_itinerary_times: [
              :time,
              :activity_id,
              :itinerary_day_id,
            ],
            restaurant_itinerary_times: [
              :time,
              :restaurant_id,
              :itinerary_day_id,
            ]
          ]
        )
      end
end
