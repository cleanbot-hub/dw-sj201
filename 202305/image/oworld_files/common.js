$(document).ready(function(){
	$('.tabBox.worldInfo > li > a').click(function(e){
		e.preventDefault();
		var btnIndex = $(this).parent().index();
		$('.tabBox.worldInfo > li > a').parent().removeClass('active');
		$(this).parent().addClass('active');
		$('.conBox.worldInfo > li').removeClass('active');
		$('.conBox.worldInfo > li').eq( btnIndex ).addClass('active');
	});
	/* $('.tabBox.snsBox > li > a').eq(0).click(function(e){
		e.preventDefault();
		var btnIndex = $(this).parent().index();
		$('.tabBox.snsBox > li > a').parent().removeClass('active');
		$(this).parent().addClass('active');
		$('.conBox.snsBox > li').removeClass('active');
		$('.conBox.snsBox > li').eq( btnIndex ).addClass('active');
	}); */
	

	$(".m_gnbBox .m_gnb > li h2").click(function(){
		if($(this).parent().hasClass('active') == true){
			$(".m_gnbBox .m_gnb > li").removeClass('active');
		} else {
			$(".m_gnbBox .m_gnb > li").removeClass('active');
			$(this).parent().addClass('active');
		}
	});
	

	$('#header .headerMain .inner .m_btn_gnb').click(function(e){
		e.preventDefault();
		$('#wrapBox').animate({left:'160'},'');
		$('.m_gnbBox').animate({left:'0'},'');
		$('.wrap_bg, .m_gnbBox').addClass('active');
	});

	$('#header .headerMain .inner .m_btn_q').click(function(e){
		e.preventDefault();
		$('#wrapBox').animate({left:'-87'},'');
		$('.m_menu_q').animate({right:'0'},'');
		$('.wrap_bg, .m_menu_q').addClass('active');
	});
	$(".wrap_bg").click(function(){
		$('#wrapBox').animate({left:'0', right:'0'},'');
		$(".m_gnbBox").animate({left:'-160'},'');
		$(".m_menu_q").animate({right:'-87'},'');
		$(this).removeClass('active');
	});
	
	/*??????*/
	/* $('.socialBox .tabBox > li > a').eq(0).click(function(e){
		e.preventDefault();
		var btnIndex = $(this).parent().index();
		$('.socialBox .tabBox > li > a').parent().removeClass('active');
		$(this).parent().addClass('active');
		$('.socialBox .conBox > li').removeClass('active');
		$('.socialBox .conBox > li').eq( btnIndex ).addClass('active');
	}); */
	
	$(".mainFullBanner .btn_ban_down, .m_mainFullBanner .m_mainFullBanner_x").click(function(e){
//		e.preventDefault();
		$('.mainCon, .mainBanner, .m_mainBanner').removeClass('displayNone');
		$('.mainFullBanner, .m_mainFullBanner').addClass('displayNone');
	});
	
	$(".mainBanner .btn_ban_down, .m_mainBanner .m_mainBanner_x").click(function(e){
//		e.preventDefault();
		$('.mainCon, .mainBanner, .m_mainBanner').addClass('displayNone');
		$('.mainFullBanner, .m_mainFullBanner').removeClass('displayNone');
	});
	
	$('#wrap .m_top .m_head_top').toggle(function(){
		$('#wrap .m_top .m_top_menu').slideDown();
	},function(){
		$('#wrap .m_top .m_top_menu').slideUp();
	});
	
	//20150501 변경 적용 하면서 변경
	/*
	$("#wrap .m_top .m_top_menu > li > .m_top_mBtn").click(function(e){
		
		if($(this).parent().hasClass("on") == true){
			e.preventDefault();
		} else{
			e.preventDefault();
			$("#wrap .m_top .m_top_menu > li").removeClass("on");
			$(this).parent().addClass("on");
		}
	});
	*/
	$("#wrap .m_top .m_top_menu > li > .m_top_mBtn").toggle(function(e){
		if($(this).parent().hasClass("on") == true){
			e.preventDefault();
		} else{
			e.preventDefault();
			$(this).parent().addClass("on");
		}
	},function(e){
		if($(this).parent().hasClass("on") == false){
			e.preventDefault();
		} else{
			e.preventDefault();
			$(this).parent().removeClass("on");
		}
	});

	$('.botBtTop').click(function(e){
		$('html, body').animate({scrollTop:0},300,'easeInOutExpo');
		return false;
	});
	
	
});


function SwitchMenu(obj){
	var el = document.getElementById(obj);
	if(el.style.display != "block"){								
		el.style.display = "block";
	}else{
		el.style.display = "none";
	}
}

function ViewObj(obj,arg){
	var el = document.getElementById(obj);
	if(arg=='1'){		
		el.style.display = "block";
	}else if(arg=='0'){		
		el.style.display = "none";
	}
}


function image_window(img, w, h)
{
	
    var winl = (screen.width-w)/2; 
    var wint = (screen.height-h)/3; 

    if (w >= screen.width) { 
        winl = 0; 
        h = (parseInt)(w * (h / w)); 
    } 

    if (h >= screen.height) { 
        wint = 0; 
        w = (parseInt)(h * (w / h)); 
    } 

    var js_url = "<script type='text/javascript'> \n"; 
        js_url += "<!-- \n"; 
        js_url += "var ie=document.all; \n"; 
        js_url += "var nn6=document.getElementById&&!document.all; \n"; 
        js_url += "var isdrag=false; \n"; 
        js_url += "var x,y; \n"; 
        js_url += "var dobj; \n"; 
        js_url += "function movemouse(e) \n"; 
        js_url += "{ \n"; 
        js_url += "  if (isdrag) \n"; 
        js_url += "  { \n"; 
        js_url += "    dobj.style.left = nn6 ? tx + e.clientX - x : tx + event.clientX - x; \n"; 
        js_url += "    dobj.style.top  = nn6 ? ty + e.clientY - y : ty + event.clientY - y; \n"; 
        js_url += "    return false; \n"; 
        js_url += "  } \n"; 
        js_url += "} \n"; 
        js_url += "function selectmouse(e) \n"; 
        js_url += "{ \n"; 
        js_url += "  var fobj      = nn6 ? e.target : event.srcElement; \n"; 
        js_url += "  var topelement = nn6 ? 'HTML' : 'BODY'; \n"; 
        js_url += "  while (fobj.tagName != topelement && fobj.className != 'dragme') \n"; 
        js_url += "  { \n"; 
        js_url += "    fobj = nn6 ? fobj.parentNode : fobj.parentElement; \n"; 
        js_url += "  } \n"; 
        js_url += "  if (fobj.className=='dragme') \n"; 
        js_url += "  { \n"; 
        js_url += "    isdrag = true; \n"; 
        js_url += "    dobj = fobj; \n"; 
        js_url += "    tx = parseInt(dobj.style.left+0); \n"; 
        js_url += "    ty = parseInt(dobj.style.top+0); \n"; 
        js_url += "    x = nn6 ? e.clientX : event.clientX; \n"; 
        js_url += "    y = nn6 ? e.clientY : event.clientY; \n"; 
        js_url += "    document.onmousemove=movemouse; \n"; 
        js_url += "    return false; \n"; 
        js_url += "  } \n"; 
        js_url += "} \n"; 
        js_url += "document.onmousedown=selectmouse; \n"; 
        js_url += "document.onmouseup=new Function('isdrag=false'); \n"; 
        js_url += "//--> \n"; 
        js_url += "</"+"script> \n"; 

    var settings;

    settings  ='width='+(w+10)+','; 
    settings +='height='+(h+10)+','; 
    
    settings +='top='+wint+','; 
    settings +='left='+winl+','; 
    settings +='scrollbars=no,'; 
    settings +='resizable=yes,'; 
    settings +='status=no'; 

    win=window.open("","image_window",settings); 
    win.document.open(); 
    win.document.write ("<html><head> \n<meta http-equiv='imagetoolbar' CONTENT='no'> \n<meta http-equiv='content-type' content='text/html; charset=utf-8'>\n"); 
    var size = "이미지 사이즈 : "+w+" x "+h;
    win.document.write ("<title>"+size+"</title> \n"); 
    if(w >= screen.width || h >= screen.height) { 
        win.document.write (js_url); 
        var click = "ondblclick='window.close();' style='cursor:move' title=' "+size+" \n\n 이미지 사이즈가 화면보다 큽니다. \n 왼쪽 버튼을 클릭한 후 마우스를 움직여서 보세요. \n\n 더블 클릭하면 닫혀요. '"; 
    } 
    else 
        var click = "onclick='window.close();' style='cursor:pointer' title=' "+size+" \n\n 클릭하면 닫혀요. '"; 
    win.document.write ("<style>.dragme{position:relative;}</style> \n"); 
    win.document.write ("</head> \n\n"); 
    win.document.write ("<body leftmargin=0 topmargin=0 bgcolor=#dddddd style='cursor:arrow;'> \n"); 
    win.document.write ("<table width=100% height=100% cellpadding=0 cellspacing=0><tr><td align=center valign=middle><img src='"+img.src+"' width='"+w+"' height='"+h+"' border=0 class='dragme' "+click+"></td></tr></table>");
    win.document.write ("</body></html>"); 
    win.document.close(); 

    if(parseInt(navigator.appVersion) >= 4){win.window.focus();} 
}
