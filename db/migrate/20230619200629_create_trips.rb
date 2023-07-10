class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :origin_airport
      t.string :destination_airport
      t.datetime :outbound_flight
      t.datetime :return_flight
      t.string :outbound_flight_number
      t.string :return_flight_number
      t.string :confirmation_number
      t.integer :user_id
      t.integer :destination_id
      t.timestamps
    end
  end
end
