/*------------------------------------------------------------------
Project:	HighLand
Version:	1.1
Created: 		18/10/2013
Last change:	22/11/2013
-------------------------------------------------------------------*/

// Sign in & sing out nav bar demo. To be removed on an operational website
// ========================================================================
$('#signin-menu').on('click', function() {
	$(this).toggleClass('display-none');
	$("#signup-menu").addClass("display-none");
	$("#cogs-menu").addClass("display-block");
	$("#profile-menu").toggleClass("display-block");
});
$('#signout-menu').on('click', function() {
	$("#signup-menu").removeClass("display-none");
	$("#signin-menu").removeClass("display-none");
	$("#cogs-menu").removeClass("display-block");
	$("#profile-menu").removeClass("display-block");
});

// Search box toggle
// =================
$('#search-btn').on('click', function() {
	$("#search-icon").toggleClass('fa-times margin-2');
	$("#search-box").toggleClass('display-block animated fadeInUp');
});

// Smooth scrolling for UI elements page
// =====================================
$(document).ready(function(){
   $('a[href*=#buttons],a[href*=#panels], a[href*=#info-boards], a[href*=#navs], a[href*=#alerts], a[href*=#thumbnails], a[href*=#social], a[href*=#section-header],a[href*=#page-tip], a[href*=#block-header]').bind("click", function(e){
	  var anchor = $(this);
	  $('html, body').stop().animate({
		 scrollTop: $(anchor.attr('href')).offset().top
	  }, 1000);
	  e.preventDefault();
   });
   return false;
});

// 404 error page smile
// ====================
$('#search-404').on('click', function() {
	$("#smile").removeClass("fa-meh-o");
	$("#smile").addClass("fa-smile-o");
});

// Sign up popovers
// ================
$(function(){
	$('#exampleInputName1').popover();
});

$(function(){
	$('#exampleInputUsername1').popover();
});

$(function(){
	$('#exampleInputEmail1').popover();
});

$(function(){
	$('#exampleInputPassword1').popover();
});

$(function(){
	$('#exampleInputPassword2').popover();
});

// Showcase 
// ========

// Background position change
var $carousel = $('#carousel-showcase');
$carousel.carousel();

$carousel.bind('slide.bs.carousel', function (e) {

  setTimeout( function(){
    var left = $carousel.find('.item.active.left');
    var right = $carousel.find('.item.active.right');
    if(left.length > 0) {
    $("#wrap").animate({
        backgroundPositionX: '+=50%'
    },0);
    }
    else if(right.length > 0) {
    $("#wrap").animate({
        backgroundPositionX: '-=50%'
    },0);
    }
  }, 500);
});