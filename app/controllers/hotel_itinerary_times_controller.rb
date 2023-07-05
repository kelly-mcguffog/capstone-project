class HotelItineraryTimesController < ApplicationController

    def index
        render json: HotelItineraryTime.all, status: :ok
    end
end
