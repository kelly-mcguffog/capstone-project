class ItineraryDaysController < ApplicationController

    def index
        render json: ItineraryDay.all, include: { 
          hotel_itinerary_times: {}, 
          activity_itinerary_times: {}, 
          restaurant_itinerary_times: {},
        }, status: :ok
    end

    def show
      itinerary = ItineraryDay.find(params[:id])
      render json: itinerary, include: { 
        hotel_itinerary_times: {}, 
        activity_itinerary_times: {}, 
        restaurant_itinerary_times: {},
      }, status: :ok

    end

    def destroy
        itinerary= ItineraryDay.find(params[:id])
        itinerary.destroy
        head :no_content
    end


    def update
      itinerary = ItineraryDay.find(params[:id])
      itinerary.update!(itinerary_day_params)
      render json: itinerary, status: :ok
    end

    def create
      itinerary_day = ItineraryDay.find_by(date: params[:itinerary_day][:date], trip_id: params[:itinerary_day][:trip_id])
      if itinerary_day
        itinerary_day.update(itinerary_day_params)
      else
        itinerary_day = ItineraryDay.create(itinerary_day_params)
      end
      render json: itinerary_day, include: {
        hotel_itinerary_times: {},
        activity_itinerary_times: {},
        restaurant_itinerary_times: {}
      }, status: :created
    end  
    
    private
    
    def itinerary_day_params
      params.require(:itinerary_day).permit(
        :date,
        :trip_id,
        hotel_itinerary_times_attributes: [
          :id,
          :time,
          :hotel_id,
          :itinerary_day_id,
          :_destroy 
        ],
        restaurant_itinerary_times_attributes: [
          :id,
          :time,
          :restaurant_id,
          :itinerary_day_id,
          :_destroy
        ],
        activity_itinerary_times_attributes: [
          :id,
          :time,
          :activity_id,
          :itinerary_day_id,
          :_destroy
        ]
      )
    end

end
