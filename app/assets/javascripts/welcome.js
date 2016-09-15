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


alert("hhhhhhhhhhhhhhhhhhhhhhhhh")