class User < ApplicationRecord
    
    has_many :trips
    has_many :destinations, through: :trips
    has_many :itinerary_days, through: :trips
    # has_many :packing_list_items, through :trips
    has_secure_password

    mount_uploader :avatar, AvatarUploader

    validates :first_name, presence: { message: "Required" }
    validates :last_name, presence: { message: "Required" }
    validates :username, presence: { message: "Required" }, 
                         uniqueness: { message: "Username is already taken" }
    validates :email, presence: { message: "Required" }, 
                    #   email: { message: "Invalid email format" },
                      uniqueness: { message: "Email is already taken" }
    validates :password, length: { in: 6..20, message: "Must be between 6 and 20 characters" }
    validates :tsa_precheck, numericality: { only_integer: true, message: "Invalid TSA Precheck number" }, 
                             length: { is: 9, message: "Must be 9 digits" }, 
                             allow_blank: true

end