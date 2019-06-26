class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :user, id: :uuid do |t|
      t.string :password_digest
      t.string :encrypted_password_reset_token, index: { unique: true }
      t.datetime :password_reset_token_expires_at
      t.timestamps null: false
      t.string :status, null: false, index: true
    end
  end
end