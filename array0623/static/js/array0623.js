/*

    현재 태그(엘리먼트) 다음 태그를 가져오는 방법 

    - .nextSibling (형제 태그를 의미한다 .)
    태그(엘리먼트) 객체에 클래스를 추가하는 방법
    - element.classList.add('클래스이름');
    클래스 여러개 추가 
    - element.classList.add('클래스이름','클래스이름');
    클래스 이름 변경 
    - element.classList.replace('변경 전 이름 ','변경 후 이름');
    클래스 삭제 
    - element.classList.toggle('삭제할 클래스 이름');

    조건에 따라 클래스 삭제

    - element.classList.toggle('삭제할 클래스이름',조건식);
    태그(element) 객체에 클래스가 있는 지 확인 방법 
    - element.classList.contains('클래스이름');
    - 해당 클래스 이름이 있다면 true 없다면 false 
     

     data-show="1" < data-하고싶은이름="태그의 변수이름 지정">  




*/




window.onload=function(){
    // 화면이 전부 로딩 되면 시작 하는 함수 

    var icon = document.getElementsByClassName("strapIcon");
    icon[0].addEventListener("click", function(){
        var list = this.nextSibling;
        var show  = list.dataset.show;
        if(show==1) {
            list.style.display="block";
            list.dataset.show='0';
        }else{
            list.style.display="none";
            list.dataset.show='1';
        }



        // var isActive = list.classList.contains("list_active");
        // if(isActive)
        //  list.classList.toggle("list_active");
        // else
        // list.classList.add("list_active");
    });

}


