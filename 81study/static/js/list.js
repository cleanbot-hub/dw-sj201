$(function () {
    // 키워드 입력란의 값이 변경될 때마다 실행되는 이벤트 핸들러 설정
    $("#keyword").on("keyup", function () {
        var keyword = $(this).val(); // keyword 아이디를 가져온다 

       // each 
        $("#data_list .data").each(function () {
            //
            $(this).toggle($(this).find("img").attr("alt").indexOf(keyword) > -1);

       
            
        });
    });
});

