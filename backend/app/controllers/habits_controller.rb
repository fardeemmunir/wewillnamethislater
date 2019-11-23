class HabitsController < ApplicationController
  
    def create
        @habit = Habit.new(tag_params)
        @habit.save
    end

    private 
    
        def habit_params
            params.require(:habit).permit(:title, :user_id)
        end
end