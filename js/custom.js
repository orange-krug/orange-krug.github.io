/*---------------------------------
[Master Javascript]

Project: lawyer

-------------------------------------------------------------------*/
(function($) {
	"use strict";
	var lawyer = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function() {
			if (!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}
			/*-------------- lawyer Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.consult_btn();
			this.slider();
			this.client_crousel();
			this.Brandcrousel();
			this.Navigation_menu();
			this.Responsive_menu();
			this.Dropdown_Menu();
			this.counter();
			this.wowanimation();
			this.MailFunction();
		},
		/*-------------- lawyer Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function() {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if (rtl_attr) {
				$('html').find('body').addClass("rtl");
			}
		},
		//consult btn
		consult_btn:function(){
			var top_offset = $(document).outerHeight()-192;
			$('.consult_btn').click(function () {
				$('body,html').animate({scrollTop: top_offset }, 1500);
			});
		},
		//caption slider
		slider: function() {
			if($(".caption_slider").length > 0){ 
				$('.caption_slider').owlCarousel({
					loop:true,
					margin:0,
					items:1,
					autoplay:true,
					autoplayTimeout:4000,
					autoplaySpeed:1500,
					smartSpeed:1500,
					animateIn:"fadeIn",
					animateOut:"fadeOut",
					dots:true,
					nav:false,
					responsiveClass:true,
					responsive:{
						0:{
							items:1        
						},
						600:{
							items:1
						},
						768:{
							items:1
						},
						1000:{
							items:1
						}
					}
				})
			}
		},
		//Clients crousel
		client_crousel: function() {
			if($(".lw_client_crousel").length > 0){ 
				$('.lw_client_crousel').owlCarousel({
					loop:true,
					margin:0,
					items:1,
					autoplay:true,
					autoplayTimeout:3000,
					autoplaySpeed:1500,
					smartSpeed:1500,
					dots:false,
					nav:false,
					responsiveClass:true,
					responsive:{
						0:{
							items:1        
						},
						600:{
							items:1
						},
						768:{
							items:1
						},
						1000:{
							items:1
						}
					}
				})
			}
		},
		
		//Brands crousel
		Brandcrousel: function() {
			if($(".brand_crousel").length > 0){ 
				$('.brand_crousel').owlCarousel({
					loop:true,
					margin:0,
					items:5,
					autoplay:true,
					autoplayTimeout:3000,
					autoplaySpeed:1500,
					smartSpeed:1500,
					dots:false,
					nav:false,
					responsiveClass:true,
					responsive:{
						0:{
							items:1        
						},
						600:{
							items:2
						},
						768:{
							items:3
						},
						1000:{
							items:5
						}
					}
				})
			}
		},
		//Navigation Menu
		Navigation_menu:function(){
			$(".header_right_menu > ul > li > a").each(function(){
				var menuatr = $(this).text();
				$(this).attr("data-content", menuatr);
			});
			
		},
		//Responsive Menu
		Responsive_menu: function() {
			$(".nav_toggle").on('click',function(){
				$(this).toggleClass("toggle_open");
				$(".header_right_menu").toggleClass("menu_open");
			});
		},
		//dropdown menu
		Dropdown_Menu: function (){
			if ($(window).width () <= 991){
				$(".header_right_menu ul li ul.sub-menu").parents("li").addClass("dropdown_toggle");
				$(".dropdown_toggle").append("<span class='caret_down'></span>");
				$(".caret_down").on("click",function(){
					$(this).toggleClass("caret_up");
					$(this).prev("ul").slideToggle();
				});
			}
			else {
				
			}
		},
		//counter 
		counter:function(){
			if($('.digit_count').length > 0){
				$('.digit_count').appear(function() {
					$('.digit_count').each(count);
					  function count(options) {
						var $this = $(this);
						options = $.extend({}, options || {}, $this.data('countToOptions') || {});
						$this.countTo(options);
					}
				});
			}
		},
		//animation on page scroll
		wowanimation:function(){ 
			var wow = new WOW({
				boxClass:     'wow',      // default
				animateClass: 'animated', // default
				offset:       0,          // default
				mobile:       true,       // default
				live:         true        // default
			})
			wow.init();
		},
		//contact form 
		MailFunction:function(){
			$('.submit_btn').on('click', function(){
				var name=$('#name').val();
				var email=$('#email').val();
				var sub=$('#subject').val();
				var phone=$('#phone_number').val();
				var u_msg=$('#message').val();
				$.ajax({
					type: "POST",
					url: "contactmail.php",
					data: {
						'username':name,
						'useremail':email,
						'usersubject':sub,
						'userphone':phone,
						'usermsg':u_msg,
						},
					success: function(msg) {
						var full_msg=msg.split("#");
						if(full_msg[0]=='1'){
							$('#name').val("");
							$('#email').val("");
							$('#subject').val("");
							$('#phone_number').val("");
							$('#message').val("");
							$('#err_msg').html( full_msg[1] );
						}
						else{
							$('#name').val(name);
							$('#email').val(email);
							$('#subject').val(sub);
							$('#phone_number').val(phone);
							$('#message').val(u_msg);
							$('#err_msg').html( full_msg[1] );
						}
					}
				});
			});
		},
   };
   lawyer.init();
   //window load function
	$(window).load(function(){
		$(".preloader").fadeOut("slow").delay("600");
	});
})(jQuery);

// иконка справа внизу, по нажатию на которую плавно проскролит наверх
$(function() {
$(window).scroll(function() {
if($(this).scrollTop() != 0) {
$('#topNubex').fadeIn();
} else {
$('#topNubex').fadeOut();
}
});
$('#topNubex').click(function() {
$('body,html').animate({scrollTop:0},700);
});
});