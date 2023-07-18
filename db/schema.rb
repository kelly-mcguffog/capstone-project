# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_06_19_203912) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "duration"
    t.string "address"
    t.float "latitude"
    t.float "longitude"
    t.string "price"
    t.string "photo"
    t.string "url"
    t.integer "destination_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "activity_itinerary_times", force: :cascade do |t|
    t.datetime "time"
    t.integer "activity_id"
    t.integer "itinerary_day_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "destinations", force: :cascade do |t|
    t.string "country"
    t.string "city"
    t.string "photo"
    t.float "longitude"
    t.float "latitude"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hotel_itinerary_times", force: :cascade do |t|
    t.datetime "time"
    t.integer "hotel_id"
    t.integer "itinerary_day_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hotels", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "average_price"
    t.integer "rating"
    t.bigint "phone_number"
    t.string "address"
    t.float "latitude"
    t.float "longitude"
    t.string "photo1"
    t.string "photo2"
    t.string "photo3"
    t.string "url"
    t.integer "destination_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "itinerary_days", force: :cascade do |t|
    t.date "date"
    t.integer "trip_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "packing_list_items", force: :cascade do |t|
    t.string "name"
    t.integer "quantity"
    t.boolean "packed"
    t.integer "trip_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "restaurant_itinerary_times", force: :cascade do |t|
    t.datetime "time"
    t.integer "restaurant_id"
    t.integer "itinerary_day_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.string "cuisine"
    t.string "description"
    t.integer "average_price"
    t.integer "rating"
    t.bigint "phone_number"
    t.string "address"
    t.float "latitude"
    t.float "longitude"
    t.string "photo1"
    t.string "photo2"
    t.string "photo3"
    t.string "url"
    t.integer "destination_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "trips", force: :cascade do |t|
    t.string "origin_airport"
    t.string "destination_airport"
    t.datetime "outbound_flight"
    t.datetime "return_flight"
    t.string "outbound_flight_number"
    t.string "return_flight_number"
    t.string "confirmation_number"
    t.integer "user_id"
    t.integer "destination_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "avatar"
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.integer "tsa_precheck"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
