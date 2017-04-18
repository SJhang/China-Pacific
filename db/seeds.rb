# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: "admin", password: "china123123")

# dishes
## appitizer
Dish.create!(name: "Veggie Egg Roll", catagory: "appitizer", ingredient: "Single piece", prices: { main: "1.50" })
Dish.create!(name: "Egg Roll", catagory: "appitizer", ingredient: "Single piece", prices: { main: "1.50" })
Dish.create!(name: "Fried Wonton", catagory: "appitizer", ingredient: "8 pieces", prices: { main: "3.95" })
Dish.create!(name: "Teriyaki Chicken on a Stick", catagory: "appitizer", ingredient: "2 sticks", prices: { main: "5.50" })
Dish.create!(name: "Crab Puff", catagory: "appitizer", ingredient: "6 pieces", prices: { main: "4.95" })
Dish.create!(name: "Fried Chicken Wings", catagory: "appitizer", ingredient: "8 pieces", prices: { main: "6.50"  })
Dish.create!(name: "Fried Tofu", catagory: "appitizer", ingredient: "8 pieces", prices: { main: "4.95" })
Dish.create!(name: "Fried Fantail Shrimp", catagory: "appitizer", ingredient: "8 pieces", prices: { main: "5.95" })
Dish.create!(name: "Steam Pork Dumplings", catagory: "appitizer", ingredient: "6 pieces", prices: { main: "5.95" })
Dish.create!(name: "Fried Pork Dumplings", catagory: "appitizer", ingredient: "6 pieces", prices: { main: "5.95" })
Dish.create!(name: "Steam Vegetable Dumplings", catagory: "appitizer", ingredient: "6 pieces", prices: { main: "5.95" })
Dish.create!(name: "Fried Vegetable Dumplings", catagory: "appitizer", ingredient: "6 pieces", prices: { main: "5.95" })
Dish.create!(name: "B.B.Q. Spare Rib", catagory: "appitizer", ingredient: "4 pieces", prices: { main: "6.95" })
Dish.create!(name: "B.B.Q. Steak on a Stick", catagory: "appitizer", ingredient: "4 pieces", prices: { main: "6.95" })
Dish.create!(name: "Bobo Tray", catagory: "appitizer", ingredient: "2 pieces of Egg Roll, Fried Wonton, Chicken Wing, Beef on a stick, B.B.Q.Spare Rib, and Fried Fantail Shrimp", prices: { main: "11.95" })

## soups
Dish.create!(name: "Egg Drop Soup", catagory: "soup", prices: {small: "1.75", medium: "2.50", large: "3.25"})
Dish.create!(name: "Wonton Soup", catagory: "soup", prices: {small: "1.75", medium: "2.50", large: "3.25"})
Dish.create!(name: "Hot and Sour Soup", catagory: "soup", spiciness: true, prices: {small: "1.75", medium: "2.50", large: "3.25"})
Dish.create!(name: "Vegetable & Bean Curd Soup", catagory: "soup", ingredient: "Serves 2 people", prices: {large: "5.95"})
Dish.create!(name: "House Special Sizzling Rice Soup", catagory: "soup", ingredient: "Serves 2 people", prices: {large: "6.50" })
Dish.create!(name: "Seafood Vegetable Soup", catagory: "soup", ingredient: "Serves 2 people", prices: {large: "6.95"})
Dish.create!(name: "House Special Wonton Soup", catagory: "soup", ingredient: "Serves 2 people", prices: {large: "6.95"})

## Chef's Recommendation
Dish.create!(name: "Sa Bo Tofu", spiciness: true, catagory: "chef", ingredient: "Fried Tofu stir-fried with vegetables and served in hot pot", prices: { dinner: "9.95" })
Dish.create!(name: "Chicken Majestic", spiciness: true, catagory: "chef", ingredient: "Chunks of Chicken deep-fried until crispy then sauteed
with dry peppers in spicy special sauce", prices: { dinner: "10.95", lunch: "7.95" })
Dish.create!(name: "Happy Family", catagory: "chef", ingredient: "Chicken, beef, shrimp and vegetables sauteed in brown sauce", prices: { dinner: "10.95", lunch: "7.95" })
Dish.create!(name: "Moo Goo Delight", catagory: "chef", ingredient: "Chicken, shrimp and mushrooms sauteed in tasty brown sauce", prices: { dinner: "10.95" })
Dish.create!(name: "Moo Shu Delight", catagory: "chef", ingredient: "Chicken, beef and shrimp stir-fried with vegetables and
eggs and served with plum sauce and flour pancakes", prices: { dinner: "10.95" })
Dish.create!(name: "Fish in Hot Brown Sauce", spiciness: true, catagory: "chef", ingredient: "Fish fillets lightly deep fried sauteed with mixed
vegetables in spicy brown sauce", prices: { dinner: "10.95" })
Dish.create!(name: "Sweet & Sour Fish", catagory: "chef", ingredient: "Fish fillet deep fried sauteed with green pepper, onion and carrot", prices: { dinner: "10.95" })
Dish.create!(name: "Black Pepper Steak", spiciness: true, catagory: "chef", ingredient: "Beef stir-fried in black pepper sauce with fresh onion
served on a hot sizzling plate", prices: { dinner: "10.95" })
Dish.create!(name: "Beijing Beef", spiciness: true, catagory: "chef", ingredient: "Chunks of beef lightly deep-fried, sauteed in spicy brown sauce", prices: { dinner: "10.95" })
Dish.create!(name: "Crispy Duck (half)", catagory: "chef", ingredient: "Duck marinated with flower-spices, steamed and deepfried
until golden brown and crispy", prices: { dinner: "12.95" })
Dish.create!(name: "Firecracker Shrimp", spiciness: true, catagory: "chef", ingredient: "Shrimp lightly deep-fried, sauteed in a hot and spicy sauce", prices: { dinner: "11.50" })
Dish.create!(name: "Beef & Scallops Delight", catagory: "chef", ingredient: "Sliced beef and scallops stir-fried with vegetables", prices: { dinner: "12.95" })
Dish.create!(name: "Lover's Shrimp", spiciness: true, catagory: "chef", ingredient: "Shrimp sauteed with Szechuan and Cantonese style
A delight for the adventurous shrimp lover", prices: { dinner: "11.50" })
Dish.create!(name: "Sa Chia Delight", spiciness: true, catagory: "chef", ingredient: "Shrimp, chicken, beef, baby corn mushrooms sauteed
with Chinese B.B.Q. sauce", prices: { dinner: "10.95" })
Dish.create!(name: "Neptune's Delight", catagory: "chef", ingredient: "Shrimp, scallops and imitation crab meat sauteed with
vegetables in a wonderful sauce", prices: { dinner: "12.95" })
Dish.create!(name: "Scallops Garlic Sauce", spiciness: true, catagory: "chef", ingredient: "Scallops and fresh vegetables with hot garlic sauce", prices: { dinner: "12.95" })
Dish.create!(name: "Yu-Hsiang Delight", spiciness: true, catagory: "chef", ingredient: "Scallops and shrimp sauteed in garlic sauce with fresh
vegetables served on a hot sizzling plate", prices: { dinner: "12.95" })

## Entree

## veg
Dish.create!(name: "Buddha's Delight", catagory: "entree", prices: { lunch: "6.50", dinner: "8.50" })
Dish.create!(name: "Broccoli with Hot Garlic Sauce", spiciness: true, catagory: "entree", prices: { lunch: "6.50", dinner: "8.50" })
Dish.create!(name: "Eggplant with Hot Garlic Sauce", spiciness: true, catagory: "entree", prices: { dinner: "8.50" })
Dish.create!(name: "Green Bean with Hot Garlic Sauce", spiciness: true, catagory: "entree", prices: { lunch: "6.50", dinner: "8.50" })
Dish.create!(name: "Snow Pea Supreme", catagory: "entree", prices: { lunch: "6.50", dinner: "8.50" })
Dish.create!(name: "Mapo Tofu", catagory: "entree", prices: { dinner: "8.50" })

## chicken
Dish.create!(name: "Chicken with Broccoli", catagory: "entree", prices: { lunch: "6.95", sunset: "8.95", dinner: "9.50" })
Dish.create!(name: "Kung Pao Chicken", spiciness: true, catagory: "entree", prices: { lunch: "6.95", dinner: "9.50" })
Dish.create!(name: "Chicken with Hot Garlic Sauce", spiciness: true, catagory: "entree", prices: { lunch: "6.95", dinner: "9.50" })
Dish.create!(name: "China Pacific Chicken" , catagory: "entree", prices: { sunset: "8.95", dinner: "9.50" })
Dish.create!(name: "Chicken with Snow Pea", catagory: "entree", prices: { lunch: "6.95", dinner: "9.50" })
Dish.create!(name: "Cashew Nut Chicken", catagory: "entree", prices: { dinner: "9.50" })
Dish.create!(name: "Almond Chicken", catagory: "entree", prices: { lunch: "6.95", dinner: "9.50"})
Dish.create!(name: "Sweet & Sour Chicken", catagory: "entree", prices: { lunch: "6.95", dinner: "9.50"})
Dish.create!(name: "Lemon Chicken", catagory: "entree", prices: { lunch: "6.95", sunset: "8.95", dinner: "9.50" })
Dish.create!(name: "Moo Goo Gai Pan", catagory: "entree", prices: { lunch: "6.95", sunset: "8.95", dinner: "9.50" })
Dish.create!(name: "Moo Shu Chicken", catagory: "entree", prices: { dinner: "9.50" })
Dish.create!(name: "Sesame Chicken", spiciness: true, catagory: "entree", prices: { lunch: "7.50", dinner: "9.95" })
Dish.create!(name: "Curry Chicken", spiciness: true, catagory: "entree", prices: { dinner: "9.50" })
Dish.create!(name: "Hunan Chicken", spiciness: true, catagory: "entree", prices: { dinner: "9.50" })
Dish.create!(name: "Szechuan Chicken", spiciness: true, catagory: "entree", prices: { dinner: "9.50" })
Dish.create!(name: "Jalapeno Chicken", spiciness: true, catagory: "entree", prices: { dinner: "9.50" })
Dish.create!(name: "Chicken Delight", catagory: "entree", prices: { dinner: "9.50" })
Dish.create!(name: "Chicken Chow Mein", catagory: "entree", prices: { dinner: "9.95" })
Dish.create!(name: "Orange Chicken", spiciness: true, catagory: "entree", prices: { lunch: "7.95", dinner: "9.95" })

## pork
Dish.create!(name: "Sweet & Sour Pork",catagory: "entree", prices: { lunch: "6.95", sunset: "8.95", dinner: "9.50" })
Dish.create!(name: "Pork with Hot Garlic Sauce", spiciness: true, catagory: "entree", prices: { lunch: "6.95", sunset: "8.95", dinner: "9.50" })
Dish.create!(name: "Twice Cooked Pork", spiciness: true, catagory: "entree", prices: { lunch: "6.95", dinner: "9.50" })
Dish.create!(name: "Szechuan Pork", spiciness: true, catagory: "entree", prices: { dinner: "9.50" })
Dish.create!(name: "China Pacific Pork", spiciness: true, catagory: "entree", prices: { dinner: "9.50" })
Dish.create!(name: "Moo Shu Pork", catagory: "entree", prices: { dinner: "9.50" })

## beef
Dish.create!(name: "Curry Beef", spiciness: true, catagory: "entree", prices: { dinner: "10.50" })
Dish.create!(name: "Kung Pao Beef", spiciness: true, catagory: "entree", prices: { lunch: "7.50", sunset: "8.95", dinner: "10.50" })
Dish.create!(name: "Beef with Hot Garlic Sauce", spiciness:true, catagory: "entree", prices: { dinner: "10.50" })
Dish.create!(name: "Szechuan Beef", spiciness: true, catagory: "entree", prices: { lunch: "7.50", sunset: "8.95", dinner: "10.50" })
Dish.create!(name: "Mongolian Beef", spiciness: true, catagory: "entree", prices: { dinner: "10.50" })
Dish.create!(name: "Beef with Snow Pea", catagory: "entree", prices: { dinner: "10.50" })
Dish.create!(name: "Beef with Green Pepper", catagory: "entree", prices: { lunch: "7.50", sunset: "8.95", dinner: "10.50" })
Dish.create!(name: "Beef with Broccoli", catagory: "entree", prices: { lunch: "7.50", dinner: "10.50" })
Dish.create!(name: "Beef Delight", catagory: "entree", prices: { dinner: "10.50" })
Dish.create!(name: "Hunan Beef", spiciness: true, catagory: "entree", prices: { lunch: "7.50", dinner: "10.50" })
Dish.create!(name: "China Pacific Beef", spiciness: true, catagory: "entree", prices: { dinner: "10.50" })
Dish.create!(name: "Sesame Beef", spiciness: true, catagory: "entree", prices: { dinner: "10.95" })
Dish.create!(name: "Orange Beef", spiciness: true, catagory: "entree", prices: { dinner: "10.95" })

## shrimp
Dish.create!(name: "Curry Shrimp", spiciness: true, catagory: "entree", prices: { dinner: "10.95" })
Dish.create!(name: "Kung Pao Shrimp", spiciness: true, catagory: "entree", prices: { dinner: "10.95" })
Dish.create!(name: "Shrimp with Hot Garlic Sauce", spiciness: true, catagory: "entree", prices: { lunch: "7.50", dinner: "10.95" })
Dish.create!(name: "Szechuan Shrimp", spiciness: true, catagory: "entree", prices: { lunch: "7.50", dinner: "10.95" })
Dish.create!(name: "Shrimp with Snow Pea", catagory: "entree", prices: { lunch: "7.50", dinner: "10.95" })
Dish.create!(name: "Rainbow Shrimp", catagory: "entree", prices: { lunch: "7.50", dinner: "10.95" })
Dish.create!(name: "Shrimp with Broccoli", catagory: "entree", prices: { lunch: "7.50", sunset: "8.95", dinner: "10.95" })
Dish.create!(name: "Cashew Nut Shrimp", catagory: "entree", prices: { lunch: "7.50", dinner: "10.95" })
Dish.create!(name: "Sweet & Sout Shrimp", catagory: "entree", prices: { lunch: "7.50", dinner: "10.95" })
Dish.create!(name: "Shrimp with Lobster Sauce", catagory: "entree", prices: { dinner: "10.95" })
Dish.create!(name: "Shrimp Delight", catagory: "entree", prices: { dinner: "10.95" })
Dish.create!(name: "Hunan Shrimp", spiciness: true, catagory: "entree", prices: { dinner: "10.95" })
Dish.create!(name: "China Pacific Shrimp", spiciness: true, catagory: "entree", prices: { dinner: "10.95" })
Dish.create!(name: "Shrimp with Hot Pepper Sauce", spiciness: true, catagory: "entree", prices: { dinner: "10.95" })
Dish.create!(name: "Sesame Shrimp", spiciness: true, catagory: "entree", prices: { dinner: "11.50" })
Dish.create!(name: "Orange Shrimp", spiciness: true, catagory: "entree", prices: { dinner: "11.50" })

Dish.create!(name: "China Pacific Fried Rice", catagory: "entree", prices: { lunch: "7.50" })
Dish.create!(name: "Shrimp and Chicken Delight", catagory: "entree", prices: { lunch: "7.95" })
