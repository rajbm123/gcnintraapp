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
//= require_tree .

function sideBarHeight(){
	var winHeight = $(window).height();
	var navBar = $(".navbar-default").height();
	$(".side-bar").height(winHeight-navBar-1);
}


// to hide the timpicker once clicked outside the time picker block 

function plansList(){
	$("#customer_net_plan").focus(function(){
		 $("html, body").animate({ scrollTop: $(document).height() }, "fast");
		$("#plan-list").fadeIn();
		$("#plan-list li").each(function(){
			$(this).click(function(){
				$("#customer_net_plan").val($(this).text());
				$("#plan-list").fadeOut('fast');
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

 





$(document).ready(function(){
	$.material.init();
	sideBarHeight();
	plansList()
	// addressCheckBox()
	
});
$(document).on('turbolinks:load', function(){
	$.material.init();
	sideBarHeight();
	plansList()
	addressCheckBox()
});