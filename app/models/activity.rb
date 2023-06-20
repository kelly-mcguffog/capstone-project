class Activity < ApplicationRecord
    belongs_to :destination
    has_many :activity_itinerary_times
    has_many :itinerary_days, through: :activity_itinerary_times
end
