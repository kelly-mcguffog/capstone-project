Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :users, only: [:index, :show, :create, :update] do
    resources :trips, only: [:index, :show, :create, :update, :destroy]
  end

  resources :trips, only: [:index, :show, :create, :update, :destroy] do
    resources :itinerary_days, only: [:index, :show, :update, :create, :destroy] do
      resources :hotel_itinerary_times, only: [:index, :destroy, :create]
      resources :activity_itinerary_times, only: [:index, :destroy, :create]
      resources :restaurant_itinerary_times, only: [:index, :destroy, :create]
    end
    resources :packing_list_items, only: [:create, :update, :destroy]
  end

  resources :users, only: [:index, :show, :create, :update]
  resources :destinations, only: [:index] do
    resources :hotels, only: [:index]
    resources :restaurants, only: [:index]
    resources :activities, only: [:index]
  end
  resources :hotels, only: [:index]
  resources :activities, only: [:index]
  resources :restaurants, only: [:index]
end
