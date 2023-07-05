class Hotel < ApplicationRecord
    belongs_to :destination
    has_many :hotel_itinerary_times
    has_many :itinerary_days, through: :hotel_itinerary_times
    
    # has_many :trips, through: :hotel_itinerary_times

end
