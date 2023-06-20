class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :average_price, :rating, :address, :latitude, :longitude, :photo, :reservation_link, :destination_id
  belongs_to :destination
  has_many :hotel_itinerary_times
end
