class HotelItineraryTimeSerializer < ActiveModel::Serializer
  attributes :id, :time, :hotel_id, :itinerary_day_id
  belongs_to :itinerary_day
  belongs_to :hotel
end
