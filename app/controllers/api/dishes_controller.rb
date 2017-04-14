require 'byebug'

class Api::DishesController < ApplicationController
  def index
    @dishes = Dish.all
  end

  def show
  end

  def create
  end

  def dish_params
    params.require(:dish).permit(:name, :sauce, :ingredient, :catagory, :thumbnail_url)
  end
end
