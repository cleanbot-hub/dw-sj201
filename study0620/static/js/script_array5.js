let num = new Array();
let a = new Array();

function init() {
    for (var i = 1; i <= 3; i++) {
        var temp = Math.floor(Math.random() * 10) + 1;
        if (num.indexOf(temp) == -1) {
            num.push(temp);
        } else {
            i--;
        }
    }
    
    for (var i = 1; i <= 7; i++) {
        var temp1 = Math.floor(Math.random() * 8);
        if (a.indexOf(temp1) == -1) {
            a.push(temp1);
        } else { 
            i--;
        }
    }
}




// 중복없이 랜덤 값 넣기 




window.onload=function(){

    init(); // 초기화 함수 실행 

    let start1=document.getElementById("startButton");
    start1.addEventListener("click",startButton);
    let pic = document.getElementsByClassName("picture"); // 배열에 첫번째 주소
    for(var i=0; i<pic.length; i++){ // 배열 
        pic[i].addEventListener("click",same_search); // 8개의 td에 클릭 이벤트 등록 
       // pic[i].innerHTML=num[i%4];

    }
        
}

function same_search(){


}

function startButton() {
    let a = document.getElementsByClassName("picture");
    for (var i = 0; i < a.length; i++) {
        var randomNumber=Math.floor(Math.random()*7)+1;
        
        a[i].innerHTML = randomNumber;
        a[a.length - i - 1].innerHTML=randomNumber;
    }
}

