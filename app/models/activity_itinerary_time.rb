class ActivityItineraryTime < ApplicationRecord
    belongs_to :itinerary_day
    belongs_to :activity
end
