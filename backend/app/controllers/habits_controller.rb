class HabitsController < ApplicationController
    before_action :set_habit, only: [:update]
  
    def create
        @habit = Habit.new(tag_params)
        @habit.save
    end

    def update
        parsed_date = Time.now.in_time_zone("Central Time (US & Canada)").strftime('%Y%-m%-e')

        # byebug
        if @habit.dates_completed.include? parsed_date
            new_dates_completed = JSON.parse(@habit.dates_completed)
            new_dates_completed.filter! do |date|
                !(date.include? parsed_date)
            end.to_json

            @habit.update(dates_completed: new_dates_completed)
        else
            new_dates_completed = (JSON.parse(@habit.dates_completed) << 
                parsed_date).to_json

            @habit.update(dates_completed: new_dates_completed)
            # byebug
            msg = Message.create(content: "#{@habit.title} completed", user: @habit.user, tag: @habit.tag)
            Pusher.trigger('messages-channel', 'new-message', { message: { 
                    content: msg.content,
                    created_at: msg.created_at.in_time_zone("Central Time (US & Canada)").strftime('%-e %B %Y, %-l:%M %p'),
                    username: msg.user.name
             } } )
        end
    end

    private 

        def set_habit
            @habit = Habit.find(params[:id])
        end
    
        def habit_params
            params.require(:habit).permit(:title, :user_id)
        end
end