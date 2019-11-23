class Board < ApplicationRecord
    has_many :subscriptions
    has_many :users, through: :subscriptions
    has_many :comments, through: :users

end