class UsersController < ApplicationController
  
    def create
        render json: { message: "test post" }
    end

    private 
    
        def user_params
            
        end
end