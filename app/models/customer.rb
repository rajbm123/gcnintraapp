class Customer < ActiveRecord::Base
	mount_uploader :address_proof, AddressProofUploader
	mount_uploader :identity_proof, IdentityProofUploader

	has_one :payment_detail
	has_many :bill_books
	accepts_nested_attributes_for :bill_books
	accepts_nested_attributes_for :payment_detail


	# def pending_amount
	# 	return "#{total_amount}"
	# end

end
