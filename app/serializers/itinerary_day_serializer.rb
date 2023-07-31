class ItineraryDaySerializer < ActiveModel::Serializer
  attributes :id, :date, :combined_itinerary_times, :trip_id

  def combined_itinerary_times
    combined_times = object.combined_itinerary_times.map do |itinerary_time|
      {
        id: itinerary_time[:id],
        time: itinerary_time[:time],
        activity: itinerary_time[:activity],
        hotel: itinerary_time[:hotel],
        restaurant: itinerary_time[:restaurant],
      }
    end
    combined_times.sort_by { |time| time[:time] }
  end
end

