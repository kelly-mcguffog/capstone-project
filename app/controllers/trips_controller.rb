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

    private

    def trip_params
        params.require(:trip).permit(
          :origin_airport,
          :destination_airport,
          :departure,
          :arrival,
          :flight_number,
          :confirmation_number,
          :destination_id,
          :user_id,
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

    # def trip_params
    #     params.permit(:origin_airport, :destination_airport, :departure, :arrival, :flight_number, :confirmation_number, :destination_id, :user_id)
    # end
end
