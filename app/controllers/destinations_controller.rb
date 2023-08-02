class DestinationsController < ApplicationController

    # skip_before_action :authorized, only: [:index]

    def index
        render json: Destination.all, status: :ok
    end

    def show
        render json: find_destination, status: :ok
    end

    private

    def destination_params
        params.permit(:country, :city, :photo)
    end

    def find_destination
        @destination = Destination.find(params[:id])
    end

end
