class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :origin_airport
      t.string :destination_airport
      t.datetime :departure
      t.datetime :arrival
      t.string :flight_number
      t.string :confirmation_number
      t.integer :user_id
      t.integer :destination_id
      t.timestamps
    end
  end
end
