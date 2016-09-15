// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require bootstrap-material-design
//= require turbolinks
//= require moment-with-locales.js
//= require bootstrap-datetimepicker.js
//= require welcome.js
//= require_tree .

function sideBarHeight(){
	var winHeight = $(window).height();
	var navBar = $(".navbar-default").height();
	$(".side-bar").height(winHeight-navBar-1);
}


// to hide the timpicker once clicked outside the time picker block 

function plansList(){
	$("#customer_net_plan").focus(function(){
		 // $("html, body").animate({ scrollTop:  }, "fast");
		$("#plan-list").fadeIn();
		$("#plan-list li").each(function(){
			$(this).click(function(){
				$("#customer_net_plan").val($(this).text());
				$("#plan-list").fadeOut('fast');


				var planSelected = $(this).val();
				var tax = (planSelected*15)/100;
				var monthlyPay = planSelected + tax;
				
				var planCharge = $("#customer_payment_detail_attributes_plan_tax").val(tax);
				// console.log(planCharge)
				var planTax = $("#customer_payment_detail_attributes_plan_cost").val(planSelected);
				// console.log(planTax)
				$("#customer_payment_detail_attributes_monthly_payment_cost").val(monthlyPay);
			});
		});

	});

	$(document).mouseup(function (e)
	{
	    var container = $(".plans-input-block");

	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        $("#plan-list").fadeOut('fast');
	    }
	});
}


function addressCheckBox() {
	$("#planned_checked").change(function()
	 {
	      if($(this).prop('checked') == true)
	    {		
	    	  //BILLING ADDRESS
	          var addr = $("#customer_billing_address").val();
	          var pin_code = $("#customer_pin_no").val();
	          var telephone_no = $("#customer_telephone_no").val();
	          var mobile_no = $("#customer_mobile_no").val();
	          var email = $("#customer_email").val();

	          //INSTALLATION ADDRESS
	          $("#customer_installation_address").val(addr);
	          $("#customer_installation_pin_no").val(pin_code);
	          $("#customer_installation_telephone_no").val(telephone_no);
	          $("#customer_installation_mobile_no").val(mobile_no);
	          $("#customer_installation_email").val(email);
	    }
	   else
	   {
	         $("#customer_installation_address").val("");
	         $("#customer_installation_pin_no").val("");
	         $("#customer_installation_telephone_no").val("");
	         $("#customer_installation_mobile_no").val("");
	         $("#customer_installation_email").val("");
	   } 
	});
}

 
 function totalBillCalculate() {
 	$("#calculate_total_amount").click(function(){
	 	var monthlyPlanCost = $("#customer_payment_detail_attributes_monthly_payment_cost").val();
	 	var noOfMonth = $("#customer_payment_detail_attributes_no_of_months_paid").val();
	 	var installationCharge = $("#customer_payment_detail_attributes_installation_charge").val();
	 	var otherCharge = $("#customer_payment_detail_attributes_company_material_cost").val();
         var planvalue = (monthlyPlanCost*noOfMonth)
         var otherTotalCharge = parseInt(installationCharge) + parseInt(otherCharge);
         alert(otherTotalCharge)
         alert(installationCharge)
	 	var totalPay = planvalue + otherTotalCharge;
	 	$("#total-amount-div").fadeIn();
	 	$("#customer_payment_detail_attributes_total_amount").val(totalPay);
 	});
 }
 

function tableHeight() {
	var navHeight = $(".main-navbar").height();
	var headHeight = $("#page-heading").height();
	var innerNav = $(".customer-navbar").height();
    var winHeight = $(window).height();
    var offsetHeight = navHeight+headHeight+innerNav;
    var finalTableHeight = winHeight-offsetHeight;
	$(".resp-table").height(finalTableHeight-53);
}

function calculateTotalAmount(){
	    $("input:radio[name='asd[custom_address_proof]']").each(function(){
	        $(this).change(function(){
	            if($(this).prop('checked') == true) {
	                var valuetrac = $(this).val()
	                $("#customer_address_proof_type").val(valuetrac);
	                $("input:radio[name='xyz[custom_address_proof_other]']").prop('checked', false);
	                $(".text_field_address_proof").hide();
	            }
	            else
	            {
	               $("#customer_address_proof_type").val("");
	            }
	        });
	    });
	    $("input:radio[name='xyz[custom_address_proof_other]']").change(function(){
	            if($(this).prop('checked') == true) {
	                $(".text_field_address_proof").show();
	                $("#customer_address_proof_type").val("").focus();
	                $("input:radio[name='asd[custom_address_proof]']").prop('checked', false);

	            }
	    });
	// for identity proof
	    $("input:radio[name='asd[custom_id_proof]']").each(function(){
	        $(this).change(function(){
	            if($(this).prop('checked') == true) {
	                var identityValue = $(this).val()
	                $("#customer_identity_proof_type").val(identityValue);
	                $("input:radio[name='xyz[custom_id_proof_other]']").prop('checked', false);
	                $(".text_field_id_proof").hide();
	            }
	            else
	            {
	               $("#customer_address_proof_type").val("");
	            }
	        });
	    });
	    $("input:radio[name='xyz[custom_id_proof_other]']").change(function(){
	            if($(this).prop('checked') == true) {
	                $(".text_field_id_proof").show();
	                $("#customer_identity_proof_type").val("").focus();
	                $("input:radio[name='asd[custom_id_proof]']").prop('checked', false);
	            }
	    });

	    // radio buttons for billing details 
	    $("input:radio[name='asd[custom_cash_proof]']").each(function(){
	        $(this).change(function(){
	            if($(this).prop('checked') == true) {
	                var identityValue = $(this).val()
	                $("#customer_bill_books_attributes_0_bill_paid_by").val(identityValue);
	            }
	            else
	            {
	               $("#customer_bill_books_attributes_0_bill_paid_by").val("");
	            }
	        });
	    });
	    $("input:radio[name='asd[custom_cash_proof_show]']").each(function(){
	        $(this).change(function(){
	            if($(this).prop('checked') == true) {
	                var identityValue = $(this).val()
	                $("#bill_book_bill_paid_by").val(identityValue);
	            }
	            else
	            {
	               $("#bill_book_bill_paid_by").val("");
	            }
	        });
	    });
}

function customTab() {
	$("#tab-list-item li").each(function(){
		$(this).click(function(){
			$("#tab-list-item li").removeClass('active');
			$(this).addClass('active');
		});
	});
	$("#row-two").hide();
	$("#tab-list-item li:first-child").click(function(){
		$("#row-two").hide();
		$("#row-one").fadeIn();
	});
	$("#tab-list-item li:last-child").click(function(){
		$("#row-two").fadeIn();
		$("#row-one").hide();
	});
}

function datePicker(){
	$('#customer_date').datetimepicker({
		format: 'DD-MM-YYYY'
	});
	$('#customer_date_of_birth').datetimepicker({
		format: 'DD-MM-YYYY'
	});
	$('#customer_bill_books_attributes_0_bill_book_date').datetimepicker({
		format: 'DD-MM-YYYY'
	});
	$('#bill_book_bill_book_date').datetimepicker({
		format: 'DD-MM-YYYY'
	});

	$("#customer-seach-box").hide();
	$("#search-item").click(function(){
		$("#customer-seach-box").slideDown();
	});
}

$(document).ready(function(){
	$.material.init();
	sideBarHeight();
	plansList()
	// addressCheckBox()
	
	// alert(finalTableHeight)
	$('[data-toggle="offcanvas"]').click(function(){
       $("#navigation").toggleClass("hidden-xs");
   	});
	$("#navigation").height($(window).height());
});

$(document).on('turbolinks:load', function(){
	$.material.init();
	sideBarHeight();
	plansList()
	addressCheckBox()
	totalBillCalculate()
	tableHeight()
	calculateTotalAmount()
	$("#navigation").height($(window).height());
	customTab()
	datePicker()
});


// ************************************** Ajax for customer search **************************************************//

var init_friend_lookup;

init_friend_lookup = function(){
	$("#look-up-friend-form").on('ajax:before', function(event, data, status){
		$('#spin-lookup').show(); 
		$('#search-friend-cont').hide();
	});
	$("#look-up-friend-form").on('ajax:after', function(event, data, status){
		$('#spin-lookup').hide(); 
		$('#search-friend-cont').show();
	});
	$("#look-up-friend-form").on('ajax:success', function(event, data, status){
		$('#customer-main-block').replaceWith(data);
		$('#customer-lookup-results').addClass('animated fadeIn');
		init_friend_lookup(); 
	});
	$("#look-up-friend-form").on('ajax:error', function(event, xhr, status, error){
		$('#customer-lookup-results').replaceWith(' ');
		$('#lookup-errors').replaceWith('friend Not Found');
		$('#spin-lookup').hide(); 
		$('#search-friend-cont').show();
	});
}
$(document).on('turbolinks:load', init_friend_lookup);
$(document).ready(init_friend_lookup);
$(document).bind('page:change', init_friend_lookup);


// ************************************** Ajax for customer search completed **************************************************//