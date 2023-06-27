class ActivityItineraryTimeSerializer < ActiveModel::Serializer
  attributes :id, :time, :activity_id, :itinerary_day_id
  belongs_to :itinerary_day
  belongs_to :activity
end
