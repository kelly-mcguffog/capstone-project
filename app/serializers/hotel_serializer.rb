class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :short_description, :average_price, :rating, :address, :phone_number, :latitude, :longitude, :photo1, :photo2, :photo3, :url, :destination_id
  belongs_to :destination
  has_many :hotel_itinerary_times

  def short_description
    "#{self.object.description[0..200]}..."
  end
end
