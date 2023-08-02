class PackingListItemsController < ApplicationController
  before_action :find_packing_list_item, only: [:update, :destroy]

    def create
      packing_list_item = PackingListItem.create!(packing_list_item_params)
      render json: packing_list_item, status: :created
    end
  
    def update
      @packing_list_item.update!(packing_list_item_params)
      render json: @packing_list_item, status: :ok
    end

    def destroy
      @packing_list_item.destroy
      head :no_content
    end
  
    private
  
    def packing_list_item_params
      params.permit(:item, :quantity, :packed, :trip_id)
    end

    def find_packing_list_item
      @packing_list_item = PackingListItem.find(params[:id])
    end

  end
  