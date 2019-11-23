class UsersController < ApplicationController
  
    def create
        @user = User.new(user_params)
        @user.save
    end

    private 
    
        def user_params
            params.require(:user).permit(:id, :name)
        end
end