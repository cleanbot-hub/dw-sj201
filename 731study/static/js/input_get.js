
$(function(){

    $("#setImage").click(function(){
        var data= $("#imageName").val();
        $("#gallery").append("<div class='img_box'><img src='"+data+"'></div>");
       

});


    $("#3n").click(function(){
            $("gallery").css("grid-template-column","repeat(3,1fr)");
    })



})


// append 선택한 태그의 마지막에 추가 
// prepend 선택한 태그의 처음에 추가 
// before 선택한 태그의 
// after 선택한 태그의 