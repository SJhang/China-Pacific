require 'byebug'

@dishes.each do |dish|
  json.set! dish.id do
    json.partial! "dish", dish: dish
    if dish.name.include?("Chicken")
    end
  end
end
