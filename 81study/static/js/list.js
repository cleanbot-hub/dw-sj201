$(function () {
    // 키워드 입력란의 값이 변경될 때마다 실행되는 이벤트 핸들러 설정
    $("#keyword").on("keyup", function () {
        var keyword = $(this).val(); // keyword 아이디를 가져온다 

       // each 선택한 요소가 여러 개 일 때 각각에 대한 함수 
        $("#data_list .data").each(function () {
            //attribbute 속성의 값을 제어하기 위해 attr 사용 
            $(this).toggle($(this).find("img").attr("alt").indexOf(keyword) > -1);

       
            
        });
    });
});

