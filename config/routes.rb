Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  
  resources :trips, only: [:create, :update, :destroy]

  resources :users, only: [:index, :show, :create, :update] 

  resources :trips, only: [:create, :update, :destroy] do
    resources :itinerary_days, only: [:update, :create, :destroy] do
      resources :hotel_itinerary_times, only: [:destroy, :create, :update]
      resources :activity_itinerary_times, only: [:destroy, :create, :update]
      resources :restaurant_itinerary_times, only: [:destroy, :create, :update]
    end
    resources :packing_list_items, only: [:create, :update, :destroy]
  end

  resources :destinations, only: [:index]
  resources :hotels, only: [:index]
  resources :activities, only: [:index]
  resources :restaurants, only: [:index]
end