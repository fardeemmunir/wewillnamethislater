class UsersController < ApplicationController
    before_action :set_user, only: [:show]
  
    def create
        @user = User.new(user_params)
        if @user.save
            # render json: { status: :ok }
        else
            render json: { status: :unprocessable_entity }
        end

        running = @user.habits.new(title: "Run five miles today", tag: Tag.where(name: "running").first)
        meditation = @user.habits.new(title: "Meditate today", tag: Tag.where(name: "meditation").first)

        @user.subscriptions.create(tag: Tag.where(name: "running").first)
        @user.subscriptions.create(tag: Tag.where(name: "meditation").first)

        if running.save && meditation.save
            render json: { status: :ok }
        else
            render json: { running_errors: running.errors, meditation_errors: meditation.errors }
        end

        # @user.messages.create(tag: Tag.where(name: "running").first,
        #         content: "DJ KHALED WE DA BEST MAN PRODUCTIONS FEATURING 1000 other rappers")
    end

    def show
        # byebug
        subbed_messages = []
        @user.tags.each do |tag|
            # byebug
            subbed_messages.concat(tag.messages)
        end


        messages_ar = []
        subbed_messages.sort.reverse.each do |message|
            messages_ar << { content: message.content, username: message.user.name, 
                    created_at: message.created_at.in_time_zone("Central Time (US & Canada)").strftime('%-e %B %Y, %-l:%M %p') }
        end

        habits_ar = []
        @user.habits.each do |habit|
            habits_ar << habit.jsonize
        end

        render json: { user: {id: @user.firebase_id,
                        name: @user.name},
                        messages: messages_ar,
                        habits: habits_ar, }
    end

    # def get_messages_based_on_subscriptions
    #     Message.all.where()
    # end

    

    private 
    
        def user_params
            params.require(:user).permit(:firebase_id, :name)
        end

        def set_user
            @user = User.where(firebase_id: params[:firebase_id]).first
        end
end