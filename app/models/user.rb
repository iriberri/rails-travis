class User < ApplicationRecord
    validates_presence_of :first_name
    belongs_to :company
    has_many :products

    def full_name
        "#{self.last_name} #{self.first_name}"
    end
end
