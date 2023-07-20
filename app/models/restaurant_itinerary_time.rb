class RestaurantItineraryTime < ApplicationRecord
    
    belongs_to :itinerary_day
    belongs_to :restaurant

    validates :time, presence: true

end
