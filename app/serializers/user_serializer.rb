class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :avatar, :username, :tsa_precheck
  has_many :trips, serializer: TripSerializer
end