class SubscriptionsController < ApplicationController
  
    def create
        @subscription = Subscription.new(subscription_params)
        @subcription.save
    end

    private 
    
        def subscription_params
            params.require(:subscription).permit(:username, :tag_name)
        end
end