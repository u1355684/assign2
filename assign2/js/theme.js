/* ==============================================
Page Loader
=============================================== */
$(window).load(function() {
	'use strict';
	$(".loader-item").delay(700).fadeOut();
	$("#pageloader").delay(1200).fadeOut("slow");
	canvasElementsInit();
});

/* ==============================================
Mobile Menu Button
=============================================== */
$('.mini-nav-button').click(function() {
    $(".nav-menu").slideToggle("9000");
});

$('.nav a').click(function () {
	if ($(window).width() < 970) {
    	$(".nav-menu").slideToggle("2000")}
});

 /* ==============================================
Navigation Script
=============================================== */
jQuery(document).ready(function($) { 
 // Cache selectors
 var lastId;
 var topMenu = $(".nav"); 
 var topMenuHeight = 90; //topMenu.outerHeight()+15;
     // All list items
 var menuItems = topMenu.find("a"),
     // Anchors corresponding to menu items
     scrollItems = menuItems.map(function(){
       var item = $($(this).attr("href"));
       
       if (item.length) { return item; }
 });
  
// Smooth scroll internal and Extermal Links
$(window).scroll( function () {
		var fromTop = $(this).scrollTop()+topMenuHeight;
		var cur = scrollItems.map(function(){
		  if ($(this).offset().top < fromTop)
			return this;
		});
		cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";
		if (lastId !== id) {
			lastId = id;
			menuItems
			  .parent().removeClass("active");
			  menuItems.filter("[href=#"+id+"]").parent().addClass("active");               
		}              
	});
});

// Menus hide after click --  mobile devices
$(document).ready(function() {  
	$('.nav li a').click(function () {
		 $('.navbar-collapse').removeClass('in');
	});
});

jQuery(window).load(function() {    
    var screenheight=jQuery(window).height()-90;
    $('#home').css('height',screenheight+'px'); 	
    jQuery(window).scroll(function(){
       var wtop= jQuery(window).scrollTop();
       
       if(wtop > screenheight){
        jQuery('header').addClass('fix');
       }else{
        jQuery('header').removeClass('fix');
       }
    });
});	

/* ==============================================
Fixed Menu on Scroll
=============================================== */
jQuery(document).ready(function($) {								
	$("#navigation").sticky({topSpacing:0});
});