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
  
// Smooth scroll internal and Extermal LinksjQuery('.navbar a[href*=#]').each(function() {	if(jQuery(this).attr('href').indexOf("#") == 0) {		  jQuery(this).click(function(e) {	  		e.preventDefault();				var targetOffset = jQuery(jQuery(this).attr('href')).offset().top;				$('body,html').animate({scrollTop: targetOffset - 60}, 1000);			  });	}});
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
});/* =============================Count Section============================= */jQuery( document ).ready(function($) {	$(".count-number").appear(function(){		$(this).each(function(){			datacount = $(this).attr('data-count');			$(this).find('.counter').delay(6000).countTo({				from: 10,				to: datacount,				speed: 3000,				refreshInterval: 50,			});		});	});});/* ==============================================Client=============================================== */	$(window).load(function() {	$("#flexiselDemo").flexisel({		visibleItems: 1,		animationSpeed: 1000,		autoPlay: true,		autoPlaySpeed: 5000,		pauseOnHover: true,		enableResponsiveBreakpoints: true,		responsiveBreakpoints: { 			portrait: { 				changePoint:480,				visibleItems: 1			}, 			landscape: { 				changePoint:640,				visibleItems: 1			},			tablet: { 				changePoint:768,				visibleItems: 1			}		}	});});/* ==============================================Contact Form=============================================== */					jQuery(function(){			jQuery("#submit_btn").click(function() { 				//get input field values				var user_name       = jQuery('input[name=name]').val(); 				var user_email      = jQuery('input[name=email]').val();				var user_phone      = jQuery('input[name=phone]').val();				var user_message    = jQuery('textarea[name=comment]').val();								//simple validation at client's end				//we simply change border color to red if empty field using .css()				var proceed = true;				if(user_name==""){ 					jQuery('input[name=name]').css('border-color','red'); 					proceed = false;				}				if(user_email==""){ 					jQuery('input[name=email]').css('border-color','red'); 					proceed = false;				}				if(user_phone=="") {    					jQuery('input[name=phone]').css('border-color','red'); 					proceed = false;				}				if(user_message=="") {  					jQuery('textarea[name=comment]').css('border-color','red'); 					proceed = false;				}						//everything looks good! proceed...				if(proceed) 				{					//data to be sent to server					post_data = {'userName':user_name, 'userEmail':user_email, 'userPhone':user_phone, 'userMessage':user_message};										//Ajax post data to server					jQuery.post('contact_me.php', post_data, function(response){  								//load json data from server and output message     						if(response.type == 'error')						{							output = '<div class="error">'+response.text+'</div>';						}else{							output = '<div class="success">'+response.text+'</div>';														//reset values in all input fields							jQuery('#contact_form input').val(''); 							jQuery('#contact_form textarea').val(''); 						}												jQuery("#result").hide().html(output).slideDown();					}, 'json');									}			});						//reset previously set border colors and hide all message on .keyup()			jQuery("#contact_form input, #contact_form textarea").keyup(function() { 				jQuery("#contact_form input, #contact_form textarea").css('border-color',''); 				jQuery("#result").slideUp();			});					});			/* ==============================================Animated Items=============================================== */	jQuery(document).ready(function($) {		'use strict';    	$('.animated').appear(function() {	        var elem = $(this);	        var animation = elem.data('animation');	        if ( !elem.hasClass('visible') ) {	        	var animationDelay = elem.data('animation-delay');	            if ( animationDelay ) {	                setTimeout(function(){	                    elem.addClass( animation + " visible" );	                }, animationDelay);	            } else {	                elem.addClass( animation + " visible" );	            }	        }	    });});/* ==============================================Canvas Generator=============================================== */jQuery( document ).ready(function($) {	canvasElementsInit();});function canvasElementsInit() {      var canvas = document.getElementById('green');      var context = canvas.getContext('2d');      context.beginPath();      context.arc(140, -60, 139, 0, Math.PI, false);      context.closePath();      context.lineWidth = 0;      context.fillStyle = '#96c02d';	  context.globalAlpha=0.9; // Half opacity      context.fill();      context.strokeStyle = 'transparent';      context.stroke();	  	  var canvas = document.getElementById('blue');      var context = canvas.getContext('2d');      context.beginPath();      context.arc(140, -60, 139, 0, Math.PI, false);      context.closePath();      context.lineWidth = 0;      context.fillStyle = '#3dc7ee';	  context.globalAlpha=0.9; // Half opacity      context.fill();      context.strokeStyle = 'transparent';      context.stroke();	  	  var canvas = document.getElementById('violet');      var context = canvas.getContext('2d');      context.beginPath();      context.arc(140, -60, 139, 0, Math.PI, false);      context.closePath();      context.lineWidth = 0;      context.fillStyle = '#7152b1';	  context.globalAlpha=0.9; // Half opacity      context.fill();      context.strokeStyle = 'transparent';      context.stroke();	  	  var canvas = document.getElementById('orange');      var context = canvas.getContext('2d');      context.beginPath();      context.arc(140, -60, 139, 0, Math.PI, false);      context.closePath();      context.lineWidth = 0;      context.fillStyle = '#f2a103';	  context.globalAlpha=0.9; // Half opacity      context.fill();      context.strokeStyle = 'transparent';      context.stroke();}  /* ==============================================Google Map=============================================== */$(document).ready(function() {			'use strict';  	function initialize() {		var myLatlng = new google.maps.LatLng(44.5403, -78.5463);		var mapOptions = {			zoom: 8,  			disableDefaultUI: true,			scrollwheel: false,			draggable: false,			center: myLatlng		};		var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);		var contentString = '<div id="map-content">'+			'<p>Office Names</p>'+			'<div> Street Name,</div>'+			'<div> City Name, State,</div>'+			'<div>Country - xxxxx </div>'		 '</div>';		  var infowindow = new google.maps.InfoWindow({			  content: contentString		  });		 var marker = new google.maps.Marker({			position: map.getCenter(),			icon: {			  path: google.maps.SymbolPath.CIRCLE,			  scale: 10			},			map: map		  });		  google.maps.event.addListener(marker, 'click', function() {			infowindow.open(map,marker);		  });		}		google.maps.event.addDomListener(window, 'load', initialize);		})