class CreatePackingListItems < ActiveRecord::Migration[6.1]
  def change
    create_table :packing_list_items do |t|
      t.string :name
      t.integer :quantity
      t.boolean :packed
      t.integer :trip_id
      t.timestamps
    end
  end
end
