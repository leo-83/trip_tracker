class Address < ApplicationRecord
  belongs_to :location
  validates :street, :state, :city, :country, :region, :zip presence: true
end
