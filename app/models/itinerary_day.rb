class ItineraryDay < ApplicationRecord
    belongs_to :trip
    has_many :hotel_itinerary_times
    has_many :activity_itinerary_times
    has_many :restaurant_itinerary_times
    has_many :hotels, through: :hotel_itinerary_times
    has_many :activities, through: :activity_itinerary_times
    has_many :restaurants, through: :restaurant_itinerary_times
end
