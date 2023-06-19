	var global_size=0;
	var global_chk=0;
	var global_chk_count=0;
	function size_check_func(){
		var width=$(window).width();				
		if(width>768&&width!=global_size&&global_chk!=1){
			global_size=width;
			global_chk=1;
			global_chk_count=1;
			//page_change(1);
		}else if(width<768&&width!=global_size&&global_chk!=2){
			global_size=width;
			global_chk=2;
			global_chk_count=2;
			//page_change(1);
		}
		setTimeout(function(){global_chk_count=0;},300);
		if(global_chk_count!=0){
			$("#touchSlider5").touchSlider({
				flexible : true,
				view : 1,
				btn_prev : $("#touchSlider5").next().find(".btn_prev"),
				btn_next : $("#touchSlider5").next().find(".btn_next"),
				initComplete : function (e) {	
					$("#touchSlider5_paging").html("");
					var num = 1;
					$("#touchSlider5 ul li").each(function (i, el) {				
						if((i+1) % e._view == 0) {
							$("#touchSlider5_paging").append('<button type="button" class="btn_page">page' + (num++) + '</button>');
						}			
					});
					$("#touchSlider5_paging .btn_page").bind("click", function (e) {
							var i = $(this).index();
							$("#touchSlider5").get(0).go_page(i);
						});
					},
					counter : function (e) {
						$("#touchSlider5_paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
					}
			});
			$("#touchSlider6").touchSlider({
				flexible : true,
				view : 1,
				btn_prev : $("#touchSlider6").next().find(".btn_prev"),
				btn_next : $("#touchSlider6").next().find(".btn_next"),
				initComplete : function (e) {	
					$("#touchSlider6_paging").html("");
					var num = 1;
					$("#touchSlider6 ul li").each(function (i, el) {				
						if((i+1) % e._view == 0) {
							$("#touchSlider6_paging").append('<button type="button" class="btn_page">page' + (num++) + '</button>');
						}			
					});
					$("#touchSlider6_paging .btn_page").bind("click", function (e) {
							var i = $(this).index();
							$("#touchSlider6").get(0).go_page(i);
						});
					},
					counter : function (e) {
						$("#touchSlider6_paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
					}
			});			
		}
		setTimeout(function(){
			size_check_func();
		},300);
	}
	$(document).ready(function() {
		$("#touchSlider1").touchSlider({
			flexible : true,
			view : 1,
			btn_prev : $("#touchSlider1").next().find(".btn_prev"),
			btn_next : $("#touchSlider1").next().find(".btn_next"),
			initComplete : function (e) {	
				$("#touchSlider1_paging").html("");
				var num = 1;
				$("#touchSlider1 ul li").each(function (i, el) {				
					if((i+1) % e._view == 0) {
						$("#touchSlider1_paging").append('<button type="button" class="btn_page">page' + (num++) + '</button>');
					}			
				});
				$("#touchSlider1_paging .btn_page").bind("click", function (e) {
						var i = $(this).index();
						$("#touchSlider1").get(0).go_page(i);
					});
				},
				counter : function (e) {
					$("#touchSlider1_paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
				}
		});
		
		
		
		$("#touchSlidermain").touchSlider({
			flexible : true,
			view : 1,
			speed : 500,
			btn_prev : $("#touchSlidermain").next().find(".btn_prev"),
			btn_next : $("#touchSlidermain").next().find(".btn_next"),
			initComplete : function (e) {	
				$("#touchSlidermain_paging").html("");
				var num = 1;
				$("#touchSlidermain ul li").each(function (i, el) {				
					if((i+1) % e._view == 0) {
						$("#touchSlidermain_paging").append('<button type="button" class="btn_page">page' + (num++) + '</button>');
					}			
				});
				$("#touchSlidermain_paging .btn_page").bind("click", function (e) {
					var i = $(this).index();
					$("#touchSlidermain").get(0).go_page(i);
				});
			},
			counter : function (e) {
				$("#touchSlidermain_paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
			}
		});
		
		$("#touchSlidermain_s").touchSlider({
			flexible : true,
			view : 1,
			speed : 500,
			btn_prev : $("#touchSlidermain_s").next().find(".btn_prev"),
			btn_next : $("#touchSlidermain_s").next().find(".btn_next"),
			initComplete : function (e) {	
				$("#touchSlidermain_s_paging").html("");
				var num = 1;
				$("#touchSlidermain_s ul li").each(function (i, el) {				
					if((i+1) % e._view == 0) {
						$("#touchSlidermain_s_paging").append('<button type="button" class="btn_page">page' + (num++) + '</button>');
					}			
				});
				$("#touchSlidermain_s_paging .btn_page").bind("click", function (e) {
						var i = $(this).index();
						$("#touchSlidermain_s").get(0).go_page(i);
					});
				},
				counter : function (e) {
					$("#touchSlidermain_s_paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
				}
		});
		
		$("#mainFullBanner .btn_prev, #mainFullBanner .btn_next").bind('click', function(){
			var current_page = $("#touchSlidermain").get(0).get_page().current;
			$("#touchSlidermain_s").get(0).go_page(current_page-1);
		});
		
		$("#touchSlidermain_s_s .btn_prev, #touchSlidermain_s_s .btn_next").bind('click', function(){
			var current_page = $("#touchSlidermain_s").get(0).get_page().current;
			$("#touchSlidermain").get(0).go_page(current_page-1);
		});
		
		
		banner_resize();
		size_check_func();
	});
	function banner_resize(){
		var height=$("#touchSlider5 .eventList").find("img").height();
		var height6=$("#touchSlider6 .eventList").find("img").height();
		var height2=$("#touchSlider1").find("img").height();
		var width=$(window).width();
		var banner_height="";
		if(width<=768){
			banner_height=$(".m_mainFullBanner").css("height");
			height=parseInt(height)+30;
		}else if(width>=768&&width<=1024){
			banner_height=$(".m_mainFullBanner").css("height");
			height=parseInt(height);
		}else if(width>=1024){
			banner_height=$("#mainFullBanner").css("height");
			height=280;
		}
		height2=parseInt(height2);
		$("#touchSlider5").css({"height":height+"px"});
		$("#touchSlider6").css({"height":height6+"px"});
		$("#touchSlider1").css({"height":height2+"px"});
		setTimeout(function(){
			banner_resize();
		},300);
	}
	var hidde_chk_num=0;
	
	function page_change(call){
		var width=$(window).width();
		var banner_height="";
		var con_height="";
		
		if(width<=768){
			banner_height=$(".m_mainFullBanner").css("height");
			con_height=parseInt($("#mainCon").height());
		}else if(width>=768&&width<=1024){
			banner_height=$(".m_mainFullBanner").css("height");
			con_height=parseInt($("#mainCon").height());
		}else if(width>=1024){
			banner_height=$("#mainFullBanner").css("height");
			con_height=parseInt($("#mainCon").height())+parseInt($("#mainBanner").height());
		}
		if(call){
			hidde_chk_num=1;
		}
		
		//荑�����
		var cName = "mainChk";
		var cookie2 = document.cookie;
        var start = cookie2.indexOf(cName);

        if(start != -1){
            //alert(call+"\t���");
			if(call == "C"){
				
				hidde_chk_num=0;
			}
			
			var date1 = new Date();
			date1.setDate(date1.getDate() + 1);
			
			//硫��������곕� 荑�� 媛�蹂�꼍
			if(hidde_chk_num==1){
				var cookies = 'mainChk=' + escape("O") + '; path=/ '; // ��� 源⑥���留�린��� escape(cValue)瑜��⑸���
				cookies += ';expires=' + date1.toGMTString() + ';';
				document.cookie = cookies;
			}else if(hidde_chk_num==0){
				var cookies = 'mainChk=' + escape("C") + '; path=/ '; // ��� 源⑥���留�린��� escape(cValue)瑜��⑸���
				cookies += ';expires=' + date1.toGMTString() + ';';
				document.cookie = cookies;
			}
	
        }else{
			//荑��媛������泥���ㅼ������ 荑�� ���
			var date1 = new Date();
			date1.setDate(date1.getDate() + 1);
                        hidde_chk_num=0;
			var cookies = cName + '=' + escape("C") + '; path=/ '; // ��� 源⑥���留�린��� escape(cValue)瑜��⑸���
			cookies += ';expires=' + date1.toGMTString() + ';';
			document.cookie = cookies;
		}
		//荑��������
		
		//�ロ�
		if(hidde_chk_num==0){
			hidde_chk_num=1;
			$("#Banner_mom").animate({"height":"0px"},100);
			$("#mainConskin").animate({"height":(con_height+64)+"px","overflow":"block"},100);
			
			//�듬������
			if(width > 1024 ){
				$(".quickMenu").css("display","block");
			}
		}else if(hidde_chk_num==1){
			//�대┝
			hidde_chk_num=0;
			$("#Banner_mom").animate({"height":banner_height,"overflow":"block"},100);
			$("#mainConskin").animate({"height":"0px"},100);
			
			//�듬������
			if(width > 1024 ){
				$(".quickMenu").css("display","none");
			}
		}
	
	
		
	}
	
	$(window).resize(function(){
		if($(window).width() <= 1024 ){
		$(".quickMenu").css("display","none");
	}
		if(hidde_chk_num==1){
			if($(window).width() > 1024 ){
				$(".quickMenu").css("display","block");
			}
		}
	});
	
	
	function banner_resize2(){
		var width=$(window).width();
		var banner_height="";

		if(width<=768){
			banner_height=$(".m_mainFullBanner").css("height");
		}else if(width>=768&&width<=1024){
			banner_height=$(".m_mainFullBanner").css("height");
		}else if(width>=1024){
			banner_height=$("#mainFullBanner").css("height");
		}
		if(hidde_chk_num==0){
			if(width>1024){
				$(".btn_ban_down2").show();
			}else{
				$(".btn_ban_down2").hide();
			}
			$("#Banner_mom").css({"height":banner_height,"overflow":"block"},300);
		}else{
			$(".btn_ban_down2").hide();
			$("#mainCon").css({"height":"toggle","overflow":"block"},300);
		}
		setTimeout(function(){banner_resize2();},300);
	}
	banner_resize2();
