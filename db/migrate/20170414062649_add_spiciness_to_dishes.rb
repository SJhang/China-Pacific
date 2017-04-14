class AddSpicinessToDishes < ActiveRecord::Migration[5.0]
  def change
    add_column :dishes, :spiciness, :boolean, null: false, default: false
  end
end
