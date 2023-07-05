class TripSerializer < ActiveModel::Serializer
  attributes :id, :origin_airport, :destination_airport, :departure, :arrival, :flight_number, :confirmation_number, :destination_id, :user_id
  belongs_to :user
  belongs_to :destination
  has_one :packing_list
  has_many :itinerary_days
end
