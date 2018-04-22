class ProcessProductsJob < ApplicationJob
  queue_as :default

  def perform(user_id)
    user = User.find(user_id)
    # Do something later
    
    500.times do |i|
      product = Product.create!(name: "tete#{i}", user_id: user.id)
      p "Created product #{i}"
    end 
    
    
  end
end
