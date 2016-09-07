class CreateInstallationInfos < ActiveRecord::Migration
	def change
		create_table :installation_infos do |t|
			t.belongs_to :customer, index: true, unique: true, foreign_key: true
			t.string :email
			t.string :mobile_no
			t.string :telephone_no
			t.text :installation_address
			t.string :pin_no
			t.timestamps
		end
	end
end
