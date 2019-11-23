Rails.application.routes.draw do
  
  resources :users, only: [:create]
  resources :habits, only: [:create]
  resources :messages, only: [:create]
  resources :subscriptions, only: [:create]
  resources :tags, only: [:create]

end
