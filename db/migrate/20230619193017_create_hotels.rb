class CreateHotels < ActiveRecord::Migration[6.1]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :description
      t.integer :average_price
      t.integer :rating
      t.string :address
      t.float :latitude
      t.float :longitude
      t.string :photo
      t.string :reservation_link
      t.integer :destination_id
      t.timestamps
    end
  end
end
