class CreateDestinations < ActiveRecord::Migration[6.1]
  def change
    create_table :destinations do |t|
      t.string :country
      t.string :city
      t.string :currency
      t.string :language
      t.string :time_zone
      t.string :dial_code
      t.string :photo
      t.timestamps
    end
  end
end
