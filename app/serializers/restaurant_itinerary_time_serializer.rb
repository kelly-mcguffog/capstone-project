class RestaurantItineraryTimeSerializer < ActiveModel::Serializer
  attributes :id, :time, :restaurant_id, :itinerary_day_id
  belongs_to :itinerary_day 
  belongs_to :restaurant
end
