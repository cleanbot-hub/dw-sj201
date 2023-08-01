$(function(){
    //input 태그에 키보드를 눌렀다가 떼는 경우에 동작 - keyup
    // input 태그에 키보드를 눌렀을 때 동작 - keydown 마지막에 누른 키는 인식이 안됨
    //input 태그에 무엇을 입력 하는 냐에 따라  toggle 을 통해서 화면에 표시를 하고 안하고
    
    $("#mydata")
    $("#search_word").on("keyup",function(){
        var word = $(this).val();
        // #mydata 안에 있는 tr을 선택해라  
        $("#mydata tr").filter(function(){
            // 여러개 중에서 하나의 tr
            // 화면에 표시가 되었냐 안되었냐 true , false 로 동작
            // toogle() 안에 조건식을 넣을 수가 있다 
            // tr 안에 있는 text 에서 글씨가 포함 되어 있냐 안되냐
            // 텍스트는 배열 이다 indexOf
            // #mydata tr의 텍스트를 가져온다 텍스트는 배열이고 배열이 -1 경우 false
            $(this).toggle($(this).text().indexOf(word) > -1);    
        });
    });
});