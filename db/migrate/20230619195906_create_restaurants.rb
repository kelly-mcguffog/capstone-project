class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :cuisine
      t.string :description
      t.integer :average_price
      t.integer :rating
      t.bigint :phone_number
      t.string :address
      t.float :latitude
      t.float :longitude
      t.string :photo1
      t.string :photo2
      t.string :photo3
      t.string :url
      t.integer :destination_id
      t.timestamps
    end
  end
end
