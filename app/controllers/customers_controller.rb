class CustomersController < ApplicationController

	def index
		@customers = Customer.all
	end

	def new
		@customer = Customer.new
	end

	def create
		# render plain: params[:customer]
		@customer = Customer.new(customer_params)
		if @customer.save
			flash[:success] = "Customer successfully created"
			redirect_to new_customer_path
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
		params.require(:customer).permit(:date, :connection_id, :name, :mobile_no, :email, :telephone_no, :date_of_birth, :billing_address, :pin_no, :nationality)
	end
end
