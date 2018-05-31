class PagesController < ApplicationController
  skip_before_action :authenticate_user!
  
  def home
    @today = Date.today
  end
  def team
    @members = ["Joffrey", "bobby", "jack"]
  end
  def contact
  end
end
