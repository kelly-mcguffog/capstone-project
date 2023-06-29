class TripsController < ApplicationController
    def index
        render json: Trip.all, status: :ok
    end
end
