class PackingListSerializer < ActiveModel::Serializer
  attributes :id, :name, :trip_id
  belongs_to :trip
  has_many :items
end
