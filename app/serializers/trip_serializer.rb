class TripSerializer < ActiveModel::Serializer
  attributes :id, :origin_airport, :destination_airport, :outbound_flight, :return_flight, :outbound_flight_number, :return_flight_number, :confirmation_number, :user_id, :destination_id
  belongs_to :user
  belongs_to :destination
  has_many :packing_list_items
  has_many :itinerary_days, serializer: ItineraryDaySerializer
end