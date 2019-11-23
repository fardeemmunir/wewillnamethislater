class User < ApplicationRecord
    has_many :tags, through: :subscriptions
    has_many :habits
    has_many :messages
end