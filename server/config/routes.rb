Rails.application.routes.draw do
  resources :comments
  resources :posts
  resources :users
  resource :authentications, path: 'auth', only: %i[create show destroy]
end
