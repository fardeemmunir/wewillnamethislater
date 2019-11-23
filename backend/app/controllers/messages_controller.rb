class MessagesController < ApplicationController
    # after_create :notify_pusher, on: :create

    # def create
    #     @message = Message.new(message_params)

    #     if @message.save

    #     else
    #         render json: { error_msg: @chat.errors, status: :unprocessable_entity } 
    #     end
    # end

    # private 
    
    #     def messages_params
    #         params.require(:message).permit(:username, :content)
    #     end

    #     def notify_pusher
    #         Pusher.trigger('messages-channel', 'new-message', @message.to_json )
    #     end
end