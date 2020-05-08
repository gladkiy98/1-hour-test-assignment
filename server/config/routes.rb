# frozen_string_literal: true

Rails.application.routes.draw do
  resources :comments, only: :create
  resources :posts, only: %i[index create]
  resources :users, only: :create
  resources :user_posts, only: %i[index create]
  resource :authentications, path: 'auth', only: %i[create show destroy]
end
