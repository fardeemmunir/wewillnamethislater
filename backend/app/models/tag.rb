class Tag < ApplicationRecord
    has_many :subscriptions
    has_many :users, through: :subscriptions
    has_many :messages, through: :users
end