class CreateConnections < ActiveRecord::Migration[5.2]
  def change
    create_table :connections do |t|
      t.string :ip
      t.string :path

      t.timestamps
    end
  end
end
