class ItineraryDay < ApplicationRecord
  belongs_to :trip
  has_many :hotel_itinerary_times, dependent: :destroy
  has_many :activity_itinerary_times, dependent: :destroy
  has_many :restaurant_itinerary_times, dependent: :destroy

  has_many :hotels, through: :hotel_itinerary_times
  has_many :activities, through: :activity_itinerary_times
  has_many :restaurants, through: :restaurant_itinerary_times

  accepts_nested_attributes_for :hotel_itinerary_times, allow_destroy: true
  accepts_nested_attributes_for :activity_itinerary_times, allow_destroy: true
  accepts_nested_attributes_for :restaurant_itinerary_times, allow_destroy: true

  def combined_itinerary_times
    combined_times = []
  
    combined_times += hotel_itinerary_times.map do |hotel_itinerary_time|
      {
        id: hotel_itinerary_time.id,
        time: hotel_itinerary_time.time,
        hotel: hotel_itinerary_time.hotel,
      }
    end
  
    combined_times += activity_itinerary_times.map do |activity_itinerary_time|
      {
        id: activity_itinerary_time.id,
        time: activity_itinerary_time.time,
        activity: activity_itinerary_time.activity,
      }
    end
  
    combined_times += restaurant_itinerary_times.map do |restaurant_itinerary_time|
      {
        id: restaurant_itinerary_time.id,
        time: restaurant_itinerary_time.time,
        restaurant: restaurant_itinerary_time.restaurant,
      }
    end
  
    combined_times.sort_by { |time| time[:time] }
  end
  
  validates :date, presence: true
  validate :only_one_hotel_per_day
  validate :time_slots_must_have_gap

  private

  def only_one_hotel_per_day
    hotels_count = hotel_itinerary_times.reject(&:marked_for_destruction?).size
    unique_hotel_dates = hotel_itinerary_times.reject(&:marked_for_destruction?).map { |hotel_itinerary| hotel_itinerary.time&.to_date }.compact.uniq
  
    if hotels_count > 1 && unique_hotel_dates.size != hotels_count
      errors.add(:hotel_itinerary_times, "You can only have one hotel per day")
    end
  end

  def time_slots_must_have_gap
    existing_times = combined_itinerary_times.map { |time| time[:time] }
    
    existing_times.each_cons(2) do |time1, time2|
      formatted_time1 = Time.parse(time1.to_s)
      formatted_time2 = Time.parse(time2.to_s)
      time_difference = (formatted_time2 - formatted_time1).abs
  
      if time_difference < 30 * 60
        if restaurant_itinerary_times.any? { |time| Time.parse((time[:time]).to_s) == formatted_time1 || Time.parse((time[:time]).to_s) == formatted_time2 }
        errors.add(:restaurant_itinerary_times, "Time slots must have a gap of at least 30 minutes.")     
        elsif hotel_itinerary_times.any? { |time| Time.parse((time[:time]).to_s) == formatted_time1 || Time.parse((time[:time]).to_s) == formatted_time2 }
          errors.add(:hotel_itinerary_times, "Time slots must have a gap of at least 30 minutes.")
        
        elsif activity_itinerary_times.any? { |time| Time.parse((time[:time]).to_s) == formatted_time1 || Time.parse((time[:time]).to_s) == formatted_time2 }
          errors.add(:activity_itinerary_times, "Time slots must have a gap of at least 30 minutes.")
        end
      end
    end
  end  
end
