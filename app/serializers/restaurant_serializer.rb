class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :description, :phone_number, :average_price, :rating, :address, :latitude, :longitude, :photo1, :photo2, :photo3, :url, :destination_id
  belongs_to :destination
  has_many :restaurant_itinerary_times
end
