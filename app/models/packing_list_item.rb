class PackingListItem < ApplicationRecord
    
    belongs_to :trip
    
    validates :name, presence: true
    validates :quantity, numericality: { only_integer: true }, allow_blank: true

end
