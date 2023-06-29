class ItineraryDaysController < ApplicationController
    # def index
    #     itinerary_days = ItineraryDay.all
    #     combined_times = itinerary_days.flat_map(&:combined_itinerary_times)
    #     sorted_times = combined_times.sort_by(&:time)
    
    #     render json: {
    #       itinerary_days: itinerary_days,
    #       combined_times: sorted_times
    #     }, status: :ok
    #     # render json: combined_times, include: [["hotel_itinerary_times", "hotel_itinerary_times.hotel"], ["restaurant_itinerary_times", "restaurant_itinerary_times.restaurant"], ["activity_itinerary_times", "activity_itinerary_times.activity"]], status: :ok
    # end
end
