class MessagesController < ApplicationController

    def create
        @message = Tag.new(tag_params)
        @tag.save
    end

    private 
    
        def subscription_params
            params.require(:subscription).permit(:username, :tag_name)
        end
end