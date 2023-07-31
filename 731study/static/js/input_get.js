$(function(){
    /*$("#setImage").click(function(){
        var data = $("#inputName").val(); //입력값을 주면
        alert(data);//알림창으로 입력값이 뜬다.

    });*/
    // append -  선택 한 태그의 마지막에 추가(2--> 1,2)
    // prepend - 선택한 태그의 처음에 추가(0--> 0,1)
    // before - 선택한 태그의 앞쪽에 추가
    // after - 선택한 태그의 뒤쪽에 추가

    //remove - 선택한 태그를 삭제 

    // empty - 선택한 태그안에 삭제 

    // removeClass- 선택한 태그에 지정한 클래스 삭제 
    // addClass - 선택한 태그에 지정한 클래스 추가


    let ri=1;
    $(function(){
        $("#setImage").click(function(){
            var data = $("#imageName").val()+(ri++);
            
            $("#gallery").append("<div class='img_box'><img src='"+data+"'></div>");
        });
        //3n 버튼 누르면
        $("#3n").click(function(){//한 줄에 3개씩
            //$("#gallery").css("grid-template-columns:","repeat(3,1rf)");
            $("#gallery").removeClass("grid-4n");//1줄에 4개씩 나오는 걸 지우고, 변수추가
            $("#gallery").addClass("grid-3n");//한 줄에 3개씩 나오는 걸로 바뀜, 변수삭제
            $("#gallery").removeClass("slide-active");//슬라이드 기능을 하기위한 단계1
            $("#gallery").addClass("slide-off");
            $("#gallery").append($(".img_box"));
        });
        //4n 버튼 누르면 
        $("#4n").click(function(){
            $("#gallery").removeClass("grid-3n");
            $("#gallery").addClass("grid-4n");
            $("#gallery").removeClass("slide-active");//슬라이드 기능을 하기위한 단계1
            $("#gallery").addClass("slide-off");
        });
        //슬라이드 
        $("#slide").click(function(){
            $("#gallery").removeClass("grid-4n");
            $("#gallery").addClass("grid-3n");
            $("#gallery").removeClass("slide-off");
            $("#gallery").addClass("slide-active");
            $("#slide_box").append($(".img_box"));
            //슬라이드박스안에추가된다, 3n,4n버튼누르면 이미지가 안보임
            var len =$(".img_box").length;
            $("#slide_box").css("width",len*1200+"px");
        });
        
    });
    //https://loremflickr.com/1200/500/paris,girl/all
});