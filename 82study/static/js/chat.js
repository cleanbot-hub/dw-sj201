let re =0;
$(function(){
    $.getJSON("http://krdrive.ipdisk.co.kr:8000/test/data.php",function(data){
        chat_show(data);
    });
    re = setTimeout(function(){
        location.reload();
    },10000);
});

$(document).on("keyup",function(){
    if(re!=0);
    clearTimeout(re);
});

function send(){
    var send_data = {writer:$("#writer").val(), content:$("#content").val()};
    send_data = JSON.stringify(send_data);
    var xmlHttp = new XMLHttpRequest(); 
    // 서버와 주고 받고 할 때 사용 되는 객체 , 새로고침 없이 데이터를 받아 올 수 있다. xml은 클라이언트와 서버 동작 할 수 있는 방식 자바스크립트에서 사용 되는 객체
    
    xmlHttp.open("POST","http://krdrive.ipdisk.co.kr:8000/test/data.php"); // 서버의 주소만 넣어 주는 게 아니고 서버에 줄 때 POST , GET 인지 
    //open("전송방식-GET,POST","서버페이지 주소 ")
    
    
    xmlHttp.onload=function(){ // 서버로 부터 받았을 때 어떻게 할 것이냐 ?
        var data = this.response;
        if(data==="fail")
            alert("다시입력하세요");
            else chat_show(JSON.parse(data));
    };
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.send("x="+send_data); // send() - 서버에 데이터 보내는 곳 , 보내는 형식은 Json 형식 이여야만 한다 .


    re = setTimeout(function(){
        location.reload();
    },10000);

}   

function chat_show(data){
    

    var out="";
    $.each(data,function(i,item){
        out +="<li class=chat><div class='write_info'><b class='name'>"+item.writer+
        "</b><span class='data'>"+item.date+"</span></div><div class='content'>"+item.content+
        "</div></li>"
    });

    $("#chat_list").html(out);
    $("#content").val('');
    $("#content").focus();


}