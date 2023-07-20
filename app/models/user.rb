class EmailValidator < ActiveModel::EachValidator
    def validate_each(record, attribute, value)
      unless value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
        record.errors.add attribute
      end
    end
  end

class User < ApplicationRecord
    
    has_many :trips
    has_many :destinations, through: :trips
    has_many :itinerary_days, through: :trips
    has_secure_password

    mount_uploader :avatar, AvatarUploader

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, email: true, uniqueness: true
    validates :password, length: { in: 6..20 }
    validates :tsa_precheck, numericality: { only_integer: true }, length: { is: 9 }, allow_blank: true

end