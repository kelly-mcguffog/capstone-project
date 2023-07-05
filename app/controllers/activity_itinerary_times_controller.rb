class ActivityItineraryTimesController < ApplicationController
    def index
        render json: ActivityItineraryTime.all, status: :ok
    end
end
