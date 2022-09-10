class Api::AddressesController < ApplicationController

    before_action :set_location
  before_action :set_address, only: [:show, :update, :destroy]

  def index
    render json: @location.addresses 
  end

  def show
    render json: @addresses  
  end

  def create
    @address = @location.addresses.new(addresses_params)
    if @address.save
      render json: @address
    else 
      render json: { errors: @address.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @address.update(address_params)
      render json: @address
    else 
      render json: { errors: @address.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @address.destroy
    render json: { message: 'Address deleted'}
  end

  private 
    def set_location
      @location = Location.find(params[:location_id])
    end

    def set_address
      @address = @location.addresses.find(params[:id])
    end

    def address_params
      params.require(:address).permit(:street, :state, :city, :country, :region, :zip,)
    end 
end
end
