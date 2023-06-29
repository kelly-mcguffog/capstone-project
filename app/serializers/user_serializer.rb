class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username, :tsa_precheck
  has_many :trips
  
  def trips
    object.trips.map do |trip|
      {
        id: trip.id,
        origin_airport: trip.origin_airport,
        destination_airport: trip.destination_airport,
        departure: trip.departure,
        arrival: trip.arrival,
        flight_number: trip.flight_number,
        confirmation_number: trip.confirmation_number,
        destination_id: trip.destination_id,
        itinerary_days: trip.itinerary_days.map do |itinerary_day|
          {
            id: itinerary_day.id,
            date: itinerary_day.date,
            combined_itinerary_times: itinerary_day.combined_itinerary_times.map do |itinerary_time|
              {
                id: itinerary_time.id,
                time: itinerary_time.time,
                activity: itinerary_time.is_a?(ActivityItineraryTime) ? itinerary_time.activity : nil,
                hotel: itinerary_time.is_a?(HotelItineraryTime) ? itinerary_time.hotel : nil,
                restaurant: itinerary_time.is_a?(RestaurantItineraryTime) ? itinerary_time.restaurant : nil
              }
            end
          }
        end
      }
    end
  end
end
