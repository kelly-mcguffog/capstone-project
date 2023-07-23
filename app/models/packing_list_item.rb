class PackingListItem < ApplicationRecord
    belongs_to :trip
  
    validates :item, presence: true
    validates :quantity, allow_blank: true, numericality: { only_integer: true }, format: { with: /\A\d+\z/ }
  end
  