# frozen_string_literal: true

collection posts
attributes :id, :body

child :comments do
  attributes :id, :body
end
