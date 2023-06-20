class RestaurantItineraryTime < ApplicationRecord
    belongs_to :itinerary_day
    belongs_to :restaurant
end
