class Tag < ApplicationRecord
    has_many :subscriptions
    has_many :users, through: :subscriptions
    has_many :messages
    has_many :habits, through: :users

    validates :name, presence: true
end