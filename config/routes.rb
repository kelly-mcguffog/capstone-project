Rails.application.routes.draw do
  
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/destinations', to: 'destinations#index'
  get 'destinations/:id', to: 'destinations#show'
  get '/users/:user_id/trips/:id', to: 'trips#show'
  
  get '/trips/:trip_id/itinerary_days', to: 'itinerary_days#index'

  # get '/users/:user_id/trips/:trip_id/itinerary_days/:itinerary_day_id', to: 'itinerary_days#show'

  get '/trips/:trip_id/itinerary_days/:itinerary_day_id/hotel_itinerary_times', to: 'hotel_itinerary_times#index'
  get '/trips/:trip_id/itinerary_days/:itinerary_day_id/activity_itinerary_times', to: 'activity_itinerary_times#index'
  get '/trips/:trip_id/itinerary_days/:itinerary_day_id/restaurant_itinerary_times', to: 'restaurant_itinerary_times#index'

  # get '/restaurant_itinerary_times', to: 'restaurant_itinerary_times#index'
  # get '/hotel_itinerary_times', to: 'hotel_itinerary_times#index'
  # get '/activity_itinerary_times', to: 'activity_itinerary_times#index'

  # get '/restaurant_itinerary_times/:restaurant_itinerary_times_id', to: 'restaurant_itinerary_times#show'



  delete '/trips/:trip_id/itinerary_days/:id/hotel_itinerary_times/:hotel_itinerary_time_id', to: 'hotel_itinerary_times#destroy'
  delete '/trips/:trip_id/itinerary_days/:id/activity_itinerary_times/:activity_itinerary_time_id', to: 'activity_itinerary_times#destroy'
  delete '/trips/:trip_id/itinerary_days/:id/restaurant_itinerary_times/:restaurant_itinerary_time_id', to: 'restaurant_itinerary_times#destroy'  

  post '/trips/:trip_id/itinerary_days/:itinerary_day_id/hotel_itinerary_times', to: 'hotel_itinerary_times#create'
  post '/trips/:trip_id/itinerary_days/:itinerary_day_id/activity_itinerary_times', to: 'activity_itinerary_times#create'
  post '/trips/:trip_id/itinerary_days/:itinerary_day_id/restaurant_itinerary_times', to: 'restaurant_itinerary_times#create'

  get '/users/:id', to: 'users#show'
  
  delete '/trips/:id', to: 'trips#destroy'
  post '/trips/:trip_id/itinerary_days', to: 'itinerary_days#create'
  delete '/trips/:trip_id/itinerary_days/:itinerary_day_id', to: 'itinerary_days#destroy'

  patch '/trips/:trip_id/itinerary_days/:itinerary_day_id', to: 'itinerary_days#update'

  get '/hotels', to: 'hotels#index'
  get '/restaurants', to: 'restaurants#index'
  get '/activities', to: 'activities#index'
  post '/users/:id/trips', to: 'trips#create'

  # delete '/itinerary_days', to: 'itinerary_days#destroy'

  # resources :items
  # resources :packing_lists
  # resources :users
  # resources :hotels
  # resources :hotel_itinerary_times
  # resources :activity_itinerary_times
  # resources :restaurant_itinerary_times
  # resources :itinerary_days
  # resources :trips
  # resources :restaurants
  # resources :activities
  # resources :destinations

  # delete '/restaurant_itinerary_times/:id'

  # resources :destinations, only: [:index, :show] do
  #   resources :trips
  #   resources :hotels
  #   resources :restaurants, only: [:index, :show]
  # end

  # resources :users, only: [:index, :show] do
  #   resources :trips
  # end

  # get '/itinerary-times', to: 'itinerary_times#combined_itinerary_times'

  # get '/users/:id/trips/:id/itinerary_day/:id/itinerary_times', to: 'itinerary_times#index'

end
