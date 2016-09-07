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

$(document).ready(function(){
	$.material.init();
	sideBarHeight();
});
$(document).on('turbolinks:load', function(){
	$.material.init();
	sideBarHeight();
});