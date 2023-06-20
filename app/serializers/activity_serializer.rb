class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :address, :latitude, :longitude, :price, :photo, :destination_id
  belongs_to :destination
  has_many :activity_itinerary_times
end
