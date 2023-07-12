class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :address, :duration, :latitude, :longitude, :price, :photo, :url, :destination_id
  belongs_to :destination
  has_many :activity_itinerary_times
end
