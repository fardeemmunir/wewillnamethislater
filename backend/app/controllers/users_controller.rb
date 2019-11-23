class UsersController < ApplicationController
  
    def create
        render json: { message: "test post" }
    end

    private 
    
        def user_params
            params.require(:user).permit(:id, :name)
        end
end