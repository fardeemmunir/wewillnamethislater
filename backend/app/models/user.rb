class User < ApplicationRecord
    has_many :subscriptions
    has_many :tags, through: :subscriptions
    has_many :habits
    has_many :messages

    validates :name, presence: true
    validates :firebase_id, presence: true  # , unique: true
end