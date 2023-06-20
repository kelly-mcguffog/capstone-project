class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :country, :city, :currency, :language, :time_zone, :dial_code, :photo
  has_many :hotels
  has_many :restaurants
  has_many :activities
  has_many :trips
end
