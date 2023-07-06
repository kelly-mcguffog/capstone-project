class ActivitiesController < ApplicationController

    def index
        activities = Activity.all
        render json: activities, status: :ok
    end

    def show
        activities = Activity.find(params[:id])
        render json: activities, status: :ok
    end

end
