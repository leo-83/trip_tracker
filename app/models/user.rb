class User < ApplicationRecord
    has_many :trips, dependent: :destroy
    validates :email, presence: true
    validates :password, presence: true

    
end
