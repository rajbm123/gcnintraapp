class BillBooksController < ApplicationController
    def index
    end

    def show
    end

    def new
        @bill = BillBook.new
    end
    def create
        #render plain: params[:customer][:customer_id]
        @bill = BillBook.new(bill_book_params)
        @bill.customer_id = params[:customer][:customer_id]
        
        if @bill.save
            redirect_to customer_path(@bill.customer)
        else
            render customer_path(@bill.customer)
        end
       

    end

    def edit
    end

    def destroy
    end

    def update
    end

    private
    def bill_book_params
        params.require(:bill_book).permit(:bill_book_no, :bill_no, :bill_amount, :customer_id)
    end
end
