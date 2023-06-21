class DestinationsController < ApplicationController
    def index
        render json: Destination.all, status: :ok
    end
end
