class CreateItineraryDays < ActiveRecord::Migration[6.1]
  def change
    create_table :itinerary_days do |t|
      t.date :date
      t.integer :trip_id
      t.timestamps
    end
  end
end
