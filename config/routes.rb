Rails.application.routes.draw do
  
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :items
  resources :packing_lists
  resources :users
  resources :hotels
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
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
