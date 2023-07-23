class PackingListItemSerializer < ActiveModel::Serializer
  attributes :id, :item, :quantity, :packed, :trip_id
  belongs_to :trip
end
