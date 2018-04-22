class UsersController < ApplicationController
    def index
        @users = User.all
    end

    def new

    end

    def create 
        @user = User.new(first_name: params['firstName'], company_id: Company.last.id)
        
        if @user.save
            ProcessProductsJob.perform_later(current_user.id)
            render json: {user: @user}, status: 200
        else
            render json: {error: @user.errors}, status: 500
        end
    end
end