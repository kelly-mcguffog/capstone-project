class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username, :password, :password_confirmation, :tsa_precheck
  has_many :trips
end
