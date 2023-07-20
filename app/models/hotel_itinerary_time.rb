class HotelItineraryTime < ApplicationRecord
    
    belongs_to :itinerary_day
    belongs_to :hotel

    validates :time, presence: true

end
