class Dish < ApplicationRecord
  validates(
    :name,
    :catagory,
    :ingredient,
    :sauce,
    :prices,
    :thumbnail_url,
    :spiciness,
    presence: true
  )
  validates :name, uniqueness: true
end
