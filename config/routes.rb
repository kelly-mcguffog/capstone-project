Rails.application.routes.draw do
  
  resources :items
  resources :packing_lists
  resources :users
  resources :hotel_itinerary_times
  resources :activity_itinerary_times
  resources :restaurant_itinerary_times
  resources :itinerary_days
  resources :trips
  resources :restaurants
  resources :activities
  resources :destinations
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/hotels', to: "hotels#index"
end
