class ActivityItineraryTime < ApplicationRecord
    
    belongs_to :itinerary_day
    belongs_to :activity

    validates :time, presence: true

end
