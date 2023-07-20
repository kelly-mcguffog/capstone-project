class Destination < ApplicationRecord
    has_many :hotels
    has_many :restaurants
    has_many :activities
    has_many :trips
    has_many :users, through: :trips
end
