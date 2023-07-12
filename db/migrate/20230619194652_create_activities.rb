class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :description
      t.string :duration
      t.string :address
      t.float :latitude
      t.float :longitude
      t.string :price
      t.string :photo
      t.string :url
      t.integer :destination_id
      t.timestamps
    end
  end
end
