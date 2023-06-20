class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :quantity
      t.boolean :packed
      t.integer :packing_list_id
      t.timestamps
    end
  end
end
