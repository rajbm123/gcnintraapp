class Customer < ActiveRecord::Base
	mount_uploader :address_proof, AddressProofUploader
	mount_uploader :identity_proof, IdentityProofUploader

	has_one :payment_detail
	accepts_nested_attributes_for :payment_detail
end
