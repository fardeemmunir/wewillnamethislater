class CreateHabits < ActiveRecord::Migration[5.2]
  def change
    create_table :habits do |t|
      t.belongs_to :user
      t.string :title

      t.timestamps
    end
  end
end
