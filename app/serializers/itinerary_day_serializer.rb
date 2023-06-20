class ItineraryDaySerializer < ActiveModel::Serializer
  attributes :id, :date, :trip_id
  belongs_to :trip
  has_many :hotel_itinerary_times 
  has_many :activity_itinerary_times
  has_many :restaurant_itinerary_times
end
