
$(function(){

    $("#setImage").click(function(){
        var data= $("#imageName").val();
        $("#gallery").append("<div class='img_box'><img src='"+data+"'></div>");
    });

    $("#3n").click(function(){      
        $("#gallery").removeClass("grid-4n");
        $("#gallery").addClass("grid-3n");
        // $("#gallery").css("grid-template-columns", "repeat(3, 1fr)");
    });

    $("#4n").click(function(){
        $("#gallery").removeClass("grid-3n");
        $("#gallery").addClass("grid-4n");
    });

// 슬라이드 
    $("#slide").click(function(){
        $("#gallery").slideToggle();

    });




});



// append 선택한 태그의 마지막에 추가 
// prepend 선택한 태그의 처음에 추가 
// before 선택한 태그의 
// after 선택한 태그의 