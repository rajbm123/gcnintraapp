class Customer < ActiveRecord::Base
	mount_uploader :address_proof, AddressProofUploader
	mount_uploader :identity_proof, IdentityProofUploader
end
