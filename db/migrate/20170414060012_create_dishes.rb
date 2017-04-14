class CreateDishes < ActiveRecord::Migration[5.0]
  def change
    create_table :dishes do |t|
      enable_extension "hstore"
      t.string :name, null: false
      t.string :sauce
      t.string :catagory, null: false
      t.text :ingredient
      t.string :thumbnail_url
      t.hstore :prices, null: false
      t.timestamps
    end
    add_index :dishes, :name, unique: true
    add_index :dishes, :prices, using: :gin
  end
end
