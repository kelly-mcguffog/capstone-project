class ItineraryDaysController < ApplicationController

  def index
      render json: ItineraryDay.all, include: { 
        hotel_itinerary_times: {}, 
        activity_itinerary_times: {}, 
        restaurant_itinerary_times: {},
      }, status: :ok
  end

  def show
    itinerary = ItineraryDay.find(params[:id])
    render json: itinerary, include: { 
      hotel_itinerary_times: {}, 
      activity_itinerary_times: {}, 
      restaurant_itinerary_times: {},
    }, status: :ok

  end

  def destroy
      itinerary= ItineraryDay.find(params[:id])
      itinerary.destroy
      head :no_content
  end

  def update
    itinerary_day = ItineraryDay.find(params[:id])
    puts "itinerary_day is #{params[:itinerary_day]}"
    date = params[:itinerary_day].delete(:date)
  
    restaurant_itinerary_times_attributes = params[:itinerary_day][:restaurant_itinerary_times_attributes]
    hotel_itinerary_times_attributes = params[:itinerary_day][:hotel_itinerary_times_attributes]
    activity_itinerary_times_attributes = params[:itinerary_day][:activity_itinerary_times_attributes]
  
    existing_itinerary_day = ItineraryDay.find_by(date: date, trip_id: itinerary_day.trip_id)
  
    if existing_itinerary_day
      if existing_itinerary_day.date.to_date.strftime('%Y-%m-%d') != date.to_date.strftime('%Y-%m-%d')
        if restaurant_itinerary_times_attributes && restaurant_itinerary_times_attributes[0][:time].present?
          selected_restaurant_id = restaurant_itinerary_times_attributes[0][:restaurant_id]
          existing_itinerary_day.restaurant_itinerary_times.create!(
            time: restaurant_itinerary_times_attributes[0][:time],
            restaurant_id: selected_restaurant_id
          )
          itinerary_day.restaurant_itinerary_times.where(restaurant_id: selected_restaurant_id).destroy_all
        end
      else
        if restaurant_itinerary_times_attributes && restaurant_itinerary_times_attributes[0][:time].present?
          selected_restaurant_id = restaurant_itinerary_times_attributes[0][:restaurant_id]
          existing_restaurant_itinerary = existing_itinerary_day.restaurant_itinerary_times.find_by(restaurant_id: selected_restaurant_id)
  
          if existing_restaurant_itinerary
            existing_restaurant_itinerary.update!(
              time: restaurant_itinerary_times_attributes[0][:time]
            )
          else
            existing_itinerary_day.restaurant_itinerary_times.create!(
              time: restaurant_itinerary_times_attributes[0][:time],
              restaurant_id: selected_restaurant_id
            )
          itinerary_day.restaurant_itinerary_times.where(restaurant_id: selected_restaurant_id).destroy_all
          end
        end
        existing_itinerary_day.save
      end
    else
      if restaurant_itinerary_times_attributes && restaurant_itinerary_times_attributes[0][:time].present?
        selected_restaurant_id = restaurant_itinerary_times_attributes[0][:restaurant_id]
        itinerary_day.restaurant_itinerary_times.where(restaurant_id: selected_restaurant_id).each do |itinerary_time|
  
          if existing_itinerary_day.nil?
            existing_itinerary_day = ItineraryDay.create!(date: date, trip_id: itinerary_day.trip_id)
          end
          existing_itinerary_day.restaurant_itinerary_times.create!(
            time: restaurant_itinerary_times_attributes[0][:time],
            restaurant_id: itinerary_time.restaurant_id
          )
          itinerary_time.destroy
        end
      end
      existing_itinerary_day.save
    end
  
    itinerary_day.destroy if itinerary_day.combined_itinerary_times.empty? && itinerary_day.date != date
  
    render json: itinerary_day, status: :ok
  end
  
  

def create
  itinerary_day = ItineraryDay.find_by(date: params[:itinerary_day][:date], trip_id: params[:itinerary_day][:trip_id])
  if itinerary_day
    itinerary_day.update!(itinerary_day_params)
  else
    itinerary_day = ItineraryDay.create!(itinerary_day_params)
  end
  render json: itinerary_day, include: {
    hotel_itinerary_times: {},
    activity_itinerary_times: {},
    restaurant_itinerary_times: {}
  }, status: :created
end  

  private

  def itinerary_day_params
    params.require(:itinerary_day).permit(
      :date,
      :trip_id,
      hotel_itinerary_times_attributes: [
        :id,
        :time,
        :hotel_id,
        :itinerary_day_id,
        :_destroy 
      ],
      restaurant_itinerary_times_attributes: [
        :id,
        :time,
        :restaurant_id,
        :itinerary_day_id,
        :_destroy
      ],
      activity_itinerary_times_attributes: [
        :id,
        :time,
        :activity_id,
        :itinerary_day_id,
        :_destroy
      ]
    )
  end


# def update_selected_time(itinerary_day, selected_time)
#   itinerary_day.combined_itinerary_times.each do |time_obj|
#     if time_obj[:time].present?
#       time_obj[:time] = selected_time
#     end
#   end
#   itinerary_day.save
# end
end
