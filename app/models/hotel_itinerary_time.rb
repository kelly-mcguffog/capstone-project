class HotelItineraryTime < ApplicationRecord
    belongs_to :itinerary_day
    belongs_to :hotel
  
    validates :time, presence: true
  
    validate :time_slots_must_have_gap
  
    private
  
    def time_slots_must_have_gap
      existing_times = (itinerary_day.activity_itinerary_times.pluck(:time) + itinerary_day.restaurant_itinerary_times.pluck(:time) + itinerary_day.hotel_itinerary_times.pluck(:time)).flatten
    
        existing_times.each do |existing_time|
          time_diff = (existing_time - time).abs / 60
          if time_diff < 30
            errors.add(:time, "Must be at least 30 minutes apart from existing times.")
            return
          end
        end
      end

  end  