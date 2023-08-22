$(function(){
    $.getJSON("./data/test4.json",function(data){
        $.each(data.diary,function(i,item){
            var color = item.날씨.indexOf("맑음")>-1 ? "blue" : 
            item.날씨.indexOf("흐림")>-1 ? "gray" : "yellow";


            // var date = item.작성일.slice(0,4)+"-"+item.작성일.slice(4,6)+"-"+item.작성일.slice(6);

            $("#search_result").append("<div class='result_card'>"+
            "<p class='date'>"+item.작성일+"</p>"+
            "<p class='title'>"+item.제목+"</p>"+
            "<p class='wt "+color+"'>"+item.날씨+"</p>"+
            "<p class='detail'>"+item.내용+"</p>"+
            "</div>");
        });
    });

    $("#searchDate").change(search);
    $("input[name=weather").click(search);
});

function search(){
    var sDate = $("#searchDate").val().split("-").join(""); //-> 
    var sWeather=$("input[name=weather]:checked").val();


    $(".result_card").filter(function(){
        var classDate = $(this).children(".date");
        var hasDate = classDate.text().indexOf(sDate) > -1;        
        var hasWeather = true;
        
        if (sWeather) {
            var classWeather = $(this).children(".wt");
            hasWeather = classWeather.text().indexOf(sWeather) > -1;
        }
        $(this).toggle(hasDate && hasWeather);
    });
}
