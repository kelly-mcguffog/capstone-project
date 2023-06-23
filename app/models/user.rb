class User < ApplicationRecord
    has_many :trips
    has_many :destinations, through: :trips
    has_secure_password
end