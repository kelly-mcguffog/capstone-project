class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :short_description, :average_price, :rating, :address, :latitude, :longitude, :photo, :reservation_link, :destination_id
  belongs_to :destination
  has_many :hotel_itinerary_times

  def short_description
    "#{self.object.description[0..100]}..."
  end
end
