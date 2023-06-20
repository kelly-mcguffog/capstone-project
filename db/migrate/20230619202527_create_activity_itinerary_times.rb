class CreateActivityItineraryTimes < ActiveRecord::Migration[6.1]
  def change
    create_table :activity_itinerary_times do |t|
      t.datetime :time
      t.integer :activity_id
      t.integer :itinerary_day_id
      t.timestamps
    end
  end
end
