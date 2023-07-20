class Trip < ApplicationRecord
    belongs_to :user
    belongs_to :destination
    has_many :packing_list_items
    has_many :itinerary_days, dependent: :destroy
    has_many :hotel_itinerary_times, through: :itinerary_days
    has_many :activity_itinerary_times, through: :itinerary_days
    has_many :restaurant_itinerary_times, through: :itinerary_days

    # has_many :activities, through: :destination
    # has_many :hotels, through: :destination
    # has_many :restaurants, through: :destination

    accepts_nested_attributes_for :itinerary_days, allow_destroy: true

    # validates :origin_airport, :destination_airport, :outbound_flight, :return_flight, presence: true

    validates :outbound_flight_number, :return_flight_number, format: { with: /\A[A-Za-z]{2}\d{1,4}\z/, message: "must start with two letters followed by 1 to 4 digits" },  allow_blank: true

    validates :confirmation_number, numericality: { only_integer: true }, length: { is: 9 }, allow_blank: true

end
