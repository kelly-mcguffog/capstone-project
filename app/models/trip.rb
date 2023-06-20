class Trip < ApplicationRecord
    belongs_to :user
    belongs_to :destination
    has_one :packing_list
    has_many :itinerary_days
end
