class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :packed, :packing_list_id
  belongs_to :packing_list
end
