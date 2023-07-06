class ItineraryDaysController < ApplicationController

    def index
        render json: ItineraryDay.all, status: :ok
    end

    def show
      itinerary = ItineraryDay.find(params[:itinerary_day_id])
      render json: itinerary

    end

    def create
        itinerary = ItineraryDay.new(itinerary_day_params)
        if itinerary.save
          render json: itinerary, status: :created
        else
          render json: { errors: itinerary.errors.full_messages }, status: :unprocessable_entity
        end
      end

    def destroy
        itinerary= ItineraryDay.find(params[:itinerary_day_id])
        itinerary.destroy
        head :no_content
    end
      
      private
      
      def itinerary_day_params
        params.require(:itinerary_day).permit(
          :date,
          :trip_id,
          hotel_itinerary_times_attributes: [
            :time,
            :hotel_id,
          ],
          restaurant_itinerary_times_attributes: [
            :time,
            :restaurant_id,
          ],
          activity_itinerary_times_attributes: [
            :time,
            :activity_id,
          ]
        )
      end

end
