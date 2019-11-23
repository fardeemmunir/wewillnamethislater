class CreateHabits < ActiveRecord::Migration[5.2]
  def change
    create_table :habits do |t|
      t.belongs_to :user
      t.belongs_to :tag
      t.string :title
      t.text :dates_completed, default: "[]"

      t.timestamps
    end
  end
end
