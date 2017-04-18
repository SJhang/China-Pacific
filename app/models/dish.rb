class Dish < ApplicationRecord
  validates(
    :name,
    :catagory,
    :prices,
    presence: true
  )
  validates :name, uniqueness: true
end
