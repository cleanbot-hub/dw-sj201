$(function(){


	var lastWidth = 0;
	var bresize = function(){
	//var currentWidth = $(window).width();
	var currentWidth = window.innerWidth;

		if(lastWidth==0){
			//initial
			var status = currentWidth < 1024 ? 'mobile' : (currentWidth >= 1024 ? 'pc' : '');
		}else{
			var status = currentWidth < lastWidth ? 'mobile' : (currentWidth > lastWidth ? 'pc' : '');
		}

		if(status=='mobile' && currentWidth < 1024 && (lastWidth > 1024 || lastWidth == 0) ){
			// Mobile

			$(".nav .contWrap > ul > li > a").click(function(e) {
				if(!$(this).hasClass("dm")){
					$(this).parent().toggleClass("active");
					e.preventDefault();
				}
			});
			$(".nav ul > li > ul").attr("style","");
			$(".nav, .nav ul li").unbind("mouseenter mouseleave");

		}else if(status=='pc' && currentWidth >= 1024  && (lastWidth < 1024 || lastWidth==0) ){
			// PC
			$(".nav").hover(function() {
					$(".nav").addClass("show");
				}, function(){
					$(".nav").removeClass("show");
			});

			$(".nav ul li").hover(function() {
					$(this).addClass("current");
				}, function(){
					$(this).removeClass("current");
			});

			$("#wrap").removeClass("slideMotion");
			$(".btn_nav").removeClass("active");
			$(".headMenu").removeClass("slideView");
			$("#glayLayerAll").removeClass("menuOn");
			$(".nav ul > li > a").unbind("click");

		}

	 lastWidth = currentWidth;
	}

	$(window).resize(function(){
		bresize();
	}).triggerHandler('resize');


	// mobile menu
	var mob_nav = $('.btn_nav');
	var mob_hm = $('.headMenu');
	mob_nav
	.click(function(){ // ASIDE
	$(this).toggleClass("active");
		mob_hm
			.toggleClass("slideView");
			$('html').addClass("expand");
			$("#wrap").toggleClass("slideMotion");
			$("#glayLayerAll").toggleClass("menuOn");
	});

	$("#glayLayerAll, #header .btn_close a").click(function(){
			mob_nav.removeClass("active");
			mob_hm.removeClass("slideView");
			$('html').removeClass("expand");
			$("#wrap").removeClass("slideMotion");
			$("#glayLayerAll").removeClass("menuOn");
	});



  $('.visual-slide').bxSlider({
    mode:'fade',
	auto: true,
	autoControls: true,
	autoControlsCombine: true,
	useCSS: true,
	responsive: true,
	adaptiveHeight: true,
    pause:5000,
    speed:750,
    controls:false,
    onSlideAfter:function($slideElement, oldIndex, newIndex){
			$('.visual-slide>li').removeClass('active');
			$('.visual-slide>li').eq(newIndex).addClass('active');
		}
  });

  $('.owl-carousel').owlCarousel({
	loop: true,
	margin: 30,
	dots:false,
	responsiveClass: true,
	nav: true,
	responsive: {
	  0: {
		items: 2
	  },
	  768: {
		items: 3
	  },
	  1024: {
		items: 4
	  }
	}
  });


  $('#popup-slide').bxSlider({
	auto: true,
	useCSS: true,
	responsive: true,
	adaptiveHeight: true,
    pause:5000,
    speed:750,
    controls:true,
	pager: true,
	pagerType: 'short'
  });

  // main board Tab
  $('#floor2 .tabArea h3 a').click(function(){
	  $('#floor2 .tabArea').removeClass('active');
	  $(this).parent().parent().addClass('active');
  });

	// product table padding
	var productpd = $('.tb_style.product').find('tr.line').index();
	$('.tb_style.product').find('tr').eq(productpd).addClass('pdadd');


});
