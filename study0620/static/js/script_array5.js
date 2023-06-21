
let show=false; // startButton 버튼 클릭 유무 
let cmp_num=new Array(); // 두개의 숫자를 비교하기 위한 배열 저장 

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
    if(!show){ // show 변수가 false 라면 not 연산에 의해 true가 적용 
            // show 변수가 true 라면 not 연산에 의해 false 가 적용
        alert("START 버튼을 클릭 하세요 ");
        return; // START 버튼을 클릭하지 않았으면 same_search 함수를 실행 시키지 않는다 
        }
        
        var child = this.children[0]; // this td  
        child.style.display="inline";
        
        cmp_num.push(parseInt(child.innerText));
        if(cmp_num.length == 2){
            if(cmp_num[0] == cmp_num[1])
            alert("같다");
            else 
            alert("같지않다");
        }
        // this.style.background="red"; 클릭하면 빨간색으로 변한다  
    }

    // 자식 태그 가져오는 방법 : 
    // children - 모든 자식 태그를 htmlcollextion의 배열로 가져온다 
    // childNodes - 모든 자식 태그를 nodeList의 배열로 가져온다 
    // firstChild - 첫번째 자식태그 
    // lastChild  - 마지막 자식 태그 







// getElementById() 또는 getElementByClassName() 등 사용하면 
// 태그의 객체라는 것이 반환된다. 태그의 객체를 변수에 담아서 사용 
// 자바스크립트에서는 html 태그를 element 요소 or 객체 
// 객체를 표현 하는 방법 중 자신을 의미 하는 this 
// same_search 함수를 실행 시킨 건 td 태그 
// 즉 td 라는 객체에 의해 same_search 함수가 실행 됨 
// same_search함수 안에서 this 라고 사용 하면 same_search 함수를 실행 
// td 태그를 의미한다 

function startButton() {
    let a = document.getElementsByClassName("back"); // span 태그의 back 에 출력 되도록 
    for (var i = 0; i < a.length; i++) {
        var randomNumber=Math.floor(Math.random()*7)+1;
        
        a[i].innerHTML = randomNumber;
        a[a.length - i - 1].innerHTML=randomNumber;
    }
    setTimeout(function(){
        let pic=document.getElementsByClassName("back");
        for(var i=0; i<pic.length; i++){
            pic[i].style.display="none";
        }
        show = true; // startButton 버튼 클릭 했다라는 의미         
    },2000);
     
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