class ItineraryDaySerializer < ActiveModel::Serializer
  attributes :id, :date, :trip_id
  belongs_to :trip
  has_many :hotel_itinerary_times 
  has_many :activity_itinerary_times
  has_many :restaurant_itinerary_times

  # def combined_itinerary_times
  #   itinerary_times = (self.restaurant_itinerary_times.select('time, "restaurant_itinerary_times" AS type') +
  #                      self.hotel_itinerary_times.select('time, "hotel_itinerary_times" AS type') +
  #                      self.activity_itinerary_times.select('time, "activity_itinerary_times" AS type')).order(:time)
  # end 

end
