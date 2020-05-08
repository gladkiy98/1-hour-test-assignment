# frozen_string_literal: true

class Post < ApplicationRecord
  enum status: %i[draft published]
  has_many :comments, as: :commentable
end
