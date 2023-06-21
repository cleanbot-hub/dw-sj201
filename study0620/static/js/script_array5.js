
 
let num = new Array(); // 화면에 표시 되는 숫자 저장  
let a = new Array(); // 숫자가 출력 될 위치 저장 배열 

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
    let a = document.getElementsByClassName("back"); // span 태그의 back 에 출력 되도록 
    for (var i = 0; i < a.length; i++) {
        var randomNumber=Math.floor(Math.random()*7)+1;
        
        a[i].innerHTML = randomNumber;
        a[a.length - i - 1].innerHTML=randomNumber;
    }
    
}









// let num = new Array();
// let board=new Array();

// function init(){ //초기화
//     //중복없이 랜덤값 넣기
//     //indexOf를 이용해서 -1이 나오면 일치하는게 없다ㅏ.
//     //  즉 중복되는 숫자가 없다는 뜻이니까  배열에저장
//     num.push(Math.floor(Math.random()*10)+1 );
//     for(var i=1; i<=3; i++){
//         var temp = Math.floor(Math.random()*10)+1;
//         if ( num.indexOf(temp) == -1){
//             num.push(temp);
//         }else{
//             i--;
//         }
//     }


//     // td가 8개여서 random ()*8 을 사용한다 indexOf에서는 0부터 시작함

//     board.push(Math.floor(Math.random()*8)); 
//     for(var i=1; i<=7; i++){
//         var temp = Math.floor(Math.random()*8);
//         if ( board.indexOf(temp) == -1){
//             board.push(temp);
//         }else{
//             i--;
//         }
//     }
    
// }

// window.onload=function(){
//     init(); //초기화 함수 실행
//     let start = document.getElementById("startButton"); // startButton id를 가져와서 
//     start.addEventListener("click",play); // 클릭 이벤트를 가져온다 실행함수는 play 함수 

//    let pic = document.getElementsByClassName("picture");
//    for( var i=0; i<pic.length; i++){
//         pic[i].addEventListener("click",same_search);
//     }

// }
// function play(){
//     let pic = document.getElementsByClassName("picture");
//     for( var i=0; i<pic.length; i++){
//          pic[board[i]].innerHTML = num[i%4]  ;
//      }
// }

// function  same_search(){
    
// }