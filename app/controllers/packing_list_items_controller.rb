class PackingListItemsController < ApplicationController
    def create
        packing_list_item = PackingListItem.create!(packing_list_item_params)
        render json: packing_list_item, status: :created
    end

    private

    def packing_list_item_params
        params.permit(:name, :quantity, :packed, :trip_id)
    end
end
