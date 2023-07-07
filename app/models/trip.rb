class Trip < ApplicationRecord
    belongs_to :user
    belongs_to :destination
    has_one :packing_list
    has_many :itinerary_days
    has_many :hotel_itinerary_times, through: :itinerary_days
    has_many :activity_itinerary_times, through: :itinerary_days
    has_many :restaurant_itinerary_times, through: :itinerary_days

    # has_many :activities, through: :destination
    # has_many :hotels, through: :destination
    # has_many :restaurants, through: :destination

    accepts_nested_attributes_for :itinerary_days, allow_destroy: true

end
