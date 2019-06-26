class CreatePlace < ActiveRecord::Migration[5.2]
  def change
    create_table :places, id: :uuid do |t|
      t.string :name
      t.st_point :coordinates, geographic: true, has_z: true

      t.timestamps
    end
  end
end