class ActivitiesController < ApplicationController

    def spotlight
        render json: Activity.all.limit(4), status: :ok
    end

    private

    # def activity_params
    #     params.permit(:name, :description, :address, :latitude, :longitude, :price, :photo, :destination_id)
    # end

    # def find_activity
    #     @activity = Activity.find(params[:id])
    # end

end
