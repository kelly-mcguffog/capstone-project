class DestinationsController < ApplicationController

    skip_before_action :authorized

    def index
        render json: Destination.all, status: :ok
    end

    private

    def destination_params
        params.permit(:country, :city, :photo)
    end
end
