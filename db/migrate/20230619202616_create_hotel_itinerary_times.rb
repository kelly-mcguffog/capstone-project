class CreateHotelItineraryTimes < ActiveRecord::Migration[6.1]
  def change
    create_table :hotel_itinerary_times do |t|
      t.datetime :time
      t.integer :hotel_id
      t.integer :itinerary_day_id
      t.timestamps
    end
  end
end
