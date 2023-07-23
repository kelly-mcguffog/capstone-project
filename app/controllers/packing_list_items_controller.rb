class PackingListItemsController < ApplicationController

    def create
      packing_list_item = PackingListItem.create!(packing_list_item_params)
      render json: packing_list_item, status: :created
    end
  
    def update
      packing_list_item = PackingListItem.find(params[:id])
      packing_list_item.update!(packing_list_item_params)
      render json: packing_list_item, status: :ok
    end

    def destroy
      packing_list_item = PackingListItem.find(params[:id])
      packing_list_item.destroy
      head :no_content
    end
  
    private
  
    def packing_list_item_params
      params.permit(:item, :quantity, :packed, :trip_id)
    end

  end
  