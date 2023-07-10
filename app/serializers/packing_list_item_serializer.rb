class PackingListItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :packed, :trip_id
  belongs_to :trip
end
