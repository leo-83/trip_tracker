class Location < ApplicationRecord
  belongs_to :trip
  has_many :addresses, dependent: :destroy
  validates :loc_name, presence: true
  Location.create(loc_name: 'North West')
  Location.create(loc_name: 'North East')
  Location.create(loc_name: 'South West')
  Location.create(loc_name: 'South East')

end
