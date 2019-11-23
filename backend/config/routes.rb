Rails.application.routes.draw do
  
  resources :users, only: [:create]
  resources :habits, only: [:create, :update]
  # resources :messages, only: [:create]
  # resources :subscriptions, only: [:create]
  # resources :tags, only: [:create]

  get '/users/:firebase_id', to: 'users#show'
end
