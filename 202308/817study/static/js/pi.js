$(function(){ // 시작 

    $(".labels").click(function(){ //.labels 를 클릭 하였을 때 
        
        if($(this).hasClass("choice") ) return; // 현재 클릭 한 labels가 choice를 가지고 있으면 아무것도 변하지 않게 설정
        $(".labels").toggleClass("choice"); // labels 클릭 하였을 때 toggle 
        $(".input_wrap").toggle(); // labels 클릭 하였을 때 input_wrap 이 보인다
    }); // labels 닫는 태그    


    




}) // 시작 - 끝 