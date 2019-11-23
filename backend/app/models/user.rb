class User < ApplicationRecord
    has_many :boards, through: :subscriptions
    has_many :comments
end