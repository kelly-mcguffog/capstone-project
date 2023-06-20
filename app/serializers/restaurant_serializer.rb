class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :description, :average_price, :rating, :address, :latitude, :longitude, :photo, :reservation_link, :destination_id
  belongs_to :destination
  has_many :restaurant_itinerary_times
end
