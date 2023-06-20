class CreatePackingLists < ActiveRecord::Migration[6.1]
  def change
    create_table :packing_lists do |t|
      t.string :name
      t.integer :trip_id
      t.timestamps
    end
  end
end
