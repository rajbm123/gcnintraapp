class Customer < ActiveRecord::Base
	has_one :installation_info
end
