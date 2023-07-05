class ItineraryDay < ApplicationRecord
    belongs_to :trip

    has_many :hotel_itinerary_times
    has_many :activity_itinerary_times
    has_many :restaurant_itinerary_times
  
    has_many :hotels, through: :hotel_itinerary_times
    has_many :activities, through: :activity_itinerary_times
    has_many :restaurants, through: :restaurant_itinerary_times
  
    accepts_nested_attributes_for :hotel_itinerary_times
    accepts_nested_attributes_for :activity_itinerary_times
    accepts_nested_attributes_for :restaurant_itinerary_times

  def combined_itinerary_times
    combined_times = []
    combined_times += restaurant_itinerary_times
    combined_times += hotel_itinerary_times
    combined_times += activity_itinerary_times
    combined_times.sort_by(&:time)
  end
    
  end
  