class CustomersController < ApplicationController

	def index
		@customers = Customer.all
	end

	def new
		@customer = Customer.new
		@customer.build_payment_detail
		
	end

	def create
		# render plain: customer_params
		@customer = Customer.new(customer_params)
		
		if @customer.save
			flash[:success] = "Customer successfully created"
			redirect_to @customer
		else
			render @customer
		end
	end

	def export
		
	end
	
	def show
		@customer = Customer.find(params[:id])
		render layout: "customerdashbord"
	end

	private

	def customer_params
		params.require(:customer).permit(:date,:connection_id,:name,:mobile_no,:email,
			:telephone_no,:date_of_birth,:billing_address,:pin_no,:nationality,:installation_address,
			:installation_pin_no,:installation_telephone_no,:installation_mobile_no,:installation_email,
			:net_plan,:address_proof,:address_proof_type,:identity_proof,:identity_proof_type,:identity_proof_no,
			payment_detail_attributes: [:plan_cost, :plan_tax, :monthly_payment_cost,:id, :no_of_months_paid,
			:installation_charge, :company_material_use, :company_material_cost, :total_amount, :pending_amount ])
	end
end


