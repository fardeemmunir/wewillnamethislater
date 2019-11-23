class Message < ApplicationRecord
    belongs_to :user
    belongs_to :tag

    validates :content, presence: true
end