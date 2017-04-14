require 'byebug'

class Api::DishesController < ApplicationController
  def index
    @dishes = Dish.all
  end

  def show
    @dish = Dish.find(params[:id])
  end

  def create
    @dish = Dish.new(dish_params)
    if @dish.save
      render :show
    else
      render json: @dish.errors.full_messages, status: 422
    end
  end

  def dish_params
    params.require(:dish).permit(
      :name,
      :prices,
      :spiciness,
      :sauce,
      :ingredient,
      :catagory,
      :thumbnail_url
    )
  end
end
