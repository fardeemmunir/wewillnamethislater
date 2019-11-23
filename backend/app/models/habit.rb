class Habit < ApplicationRecord
    belongs_to :user
    belongs_to :tag

    validates :title, presence: true

    def jsonize
        {
            id: id,
            title: title,
            dates_completed: JSON.parse(dates_completed),
        }
    end
end