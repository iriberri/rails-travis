class PagesController < ApplicationController
  def home
    @today = Date.today
  end
  def team
    @members = ["Joffrey", "bobby", "jack"]
  end
  def contact
  end
end
