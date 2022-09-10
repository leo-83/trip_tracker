class Api::UsersController < ApplicationController

    def index 
        render json: User.all
      end
    
      def show 
        @user = User.find(params[:id])
        render json: @user 
      end
    
      def create 

        @user = User.new(user_params)

        if @user.save
          render json: @user
        else
          render json: { errors: @user.errors }, status: :unprocessable_entity
        end
      end
    
      def update 
        @user = User.find(params[:id])
        if @user.update(user_params)
          render json: @user
        else 
          render json: { errors: @user.errors }, status: :unprocessable_entity
        end
      end
    
      def destroy 
        @user = User.find(params[:id])
        @user.destroy
        render json: { message: 'User deleted' }
    
      end 
    
      private 
        def user_params
          params.require(:user).permit(:name)
        end
    end