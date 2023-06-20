class Restaurant < ApplicationRecord
    belongs_to :destination
    has_many :restaurant_itinerary_times
    has_many :itinerary_days, through: :restaurant_itinerary_times
end
