class HotelItineraryTime < ApplicationRecord
    belongs_to :itinerary_day
    belongs_to :hotel
end
