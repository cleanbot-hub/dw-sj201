// 함수의 형태 4가지 

// 입력과 출력이 없는 형태 
// 입력은 있고 출력이 없는 형태 
// 입력은 없고 출력만 있는 형태 
// 입력과 출력이 있는 형태 

// 함수에서 입력이라는 것은 함수의 내용이 실행 되기 
// 위해서 꼭 필요한 값이 있다면 함수 외부로 부터 
// 값을 받는 것을 입력 이라고 한다 
// 전문 용어로 인자 인수 , 매개변수 , 라고 한다 .
// 매개변수가 존재 한다면 입력이 필요한 함수이다 .

// 함수에서 출력은 함수에서 생성된 값을 다른 함수 나 
// 다른 곳에 보내고자 할 경우에 사용 된 다 .
// return 을 사용해서 밖으로 내보낸다. 


// function sum(a,b){ // a= 20, b=20
      
//         var c = document.getElementById("sum_result");        
//         c.innerHTML=a+b;
// }

// 웹에서 입력하는 모든 값은 전부 텍스트 이다 .
// input 태그에 입력한 값을 자바스크립트로 가져오려면
// value 로 속성을 사용해야 한다 .
// 모든 input 태그에 값은 value 에 저장 되어 있다 .
// getElement 를 통해서 input 태그를 가져오고 
// 가져온 input 태그에서 value 값을 뽑아내기 



// function plus(){
//     var n1=document.getElementById("num1");
//     var n2=document.getElementById("num2");
//     var res = document.getElementById("result2");
//     // res.innerHTML = Number(n1.value) + Number(n2.value); 
//     res.innerHTML = Number(n1.value) + Number(n2.value); 
// }


// function myage(){
//     var year=document.getElementById("brith_year").value;
//     var print = document.getElementById("age");

//     print.innerHTML= 2023-Number(year);

// }

// return - 함수에 있느 값을 함수 밖으로 내보낼 때 사용된다 .
// 함수 안에서 return 이 실행 되면 해당 함수를 종료하고 값을 내보낸다.



// function score_calc() {

//     var kor = document.getElementById("kor"); 
//     var mat = document.getElementById("mat"); 
//     var music = document.getElementById("mus");


//     var res = document.getElementById("result3");

//     if(kor.value=='' || !(kor.value>=0 && kor.value <=100)){
//         alert("국어 점수를 입력 하지 않았습니다");
//         kor.focus();
//         return;
//     }else if(mat.value==''){
//         alert("수학 점수를 입력 하지 않았습니다");
//         mat.focus();
//         return;
//     }else if(music.value==''){
//         alert("음악 점수를 입력 하지 않았습니다");
//         music.focus();
//         return;
//     }
//  var tot = total(Number(kor.value),Number(mat.value),Number(music.value));
//  var avg_val = avg(tot);

//  res.innerHTML="총점 : "+tot+" 평균 : "+avg_val;
// }

// function avg(tot){
//           return (tot/3);
// }

// function total(k,m,s){
//     return (k+m+s);
// }


// 
// 소주 한잔을 마시면 수명이 2분 단축 된다 .
  //  어떤 사람이 소주를 매일 20년을 마셨다 .
   // 이 사람은 수명이 얼마나 단축이 되었는 가 ? 
   // input을 이용하여 하루에 몇잔 먹었는 지 입력 하여 
    //단축 된 수명 출력하기 
   // 단 , 단축 된 수명은 총 몇분 , 총 몇 시간 , 총 몇일 인지 각각 출력 






// 
// function my_minus_life(){
   
//     var soju=document.getElementById("soju");
//     var min=document.getElementById("minute");
//     var hour=document.getElementById("hour");
//     var day=document.getElementById("day");


//    if(soju.value==''){
//     alert("몇 잔 마셨는 지 입력 하시오 ...");
//     soju.focus();
//     return;
//    }
//     var life = Number(soju.value) * 2 * 365 * 20;
    

//    min.innerHTML ="단축수명 : " +life+"분";
//    hour.innerHTML="단축수명 : " +(life/60) +"시간";
//    day.innerHTML="단축수명 :"+(life/60/24)+"일";


// }



// function my_order(){
//     var main_menu=document.getElementById("night_snack");
//     var side_menu=document.getElementById("side_menu");
//     var alc=document.getElementById("alc");
//         // 출력 엘리먼트 
//     var order_list =document.getElementById("order_result");

//     var out="";
//     var temp=menu(main_menu.value); // 메뉴 입력시 판매 하는 메뉴 입력 하면
//     // 금액(숫자) return 되고 , 판매 하지 않는 메뉴 입력시 문자열이 return 이 된다
    
//     out += main_menu.value +"금액 : "+temp+"원<br>";
    
//     var temp1= menu(side_menu.value);
//     out += side_menu.value +"금액 : "+temp1+"원<br>";

//     var temp2=menu(alc.value);
//     out += alc.value+"금액 : " +temp2+"원<br>";

  
    
    
    
//     if(typeof(temp) === 'string' || typeof(temp1)==='string' || typeof(temp2)=='string'){ // temp 의 값 타입이 문자열이라면 
//      alert("판매하지 않는 메뉴 입니다.");
//      main_menu.value='';    // input 값 지워짐
//      side_menu.value='';     // input 값 지워짐
//      alc.value='';            // input 값 지워짐
//      main_menu.focus();
//      return;   
//     }
    
    
//     order_list.innerHTML=out;
   
    
// }

// function menu(name){ // name=메뉴 
//     var money=0;
//     switch(name){
//         case  "족발":
//         money=28000;   
//         break; // switch case 에서 break 를 하지 않으면 밑에있는 case 도 실행 된다 .
//         case "반반치킨":
//         money=22000;
//         break;
//         case "무뼈닭발":
//         money=19000;
//         break;
//         case "짬뽕탕":
//             money=18000;
//             break;
//             case "포케":
//                 money=15000;
//                 break;

//                 case "감자튀김":
//                     money=3000;
//                     break;

//                     case "염통꼬치":
//                     money=4000;
//                         break;


//             case "치즈볼":money=6000; break;
//             case "테라":money=4000; break;
//             case "피치하이볼":money=8000; break;
//             case "진로":money=5000; break;
//             case "새로주":money=4000; break;
//             case "카스": money=4000; break;
//             case "발렌타인30년산": money=1100000; break;
//             case "시바스리갈":money=59800; break;
//             default:
//                 return "판매하지 않는 메뉴 입니다."                
//     }   
//         return money;
// }




/* 


오늘의 과제 

카페 주문하기 

주문 내용은 음료명, 아이스 또는 핫 , 사이즈(M,L) 

음료 하나만 주문이 아니라 여러개 주문내역이 나와야 한다. 


예)

아메리카노,아이스,M - 2000원 
수박주스, 아이스 , M -4500원

힌트 - 모든 함수에서 사용 할수 있는 변수를 생성하려면 함수 밖에 만들면 된다.  



*/ 







// var currentOrder = null; // 현재 주문 정보
  
//   function my_order() {
//     var main_menu = document.getElementById("menutext").value;
//     var ice = document.getElementById("ice").checked;
//     var hot = document.getElementById("hot").checked;
//     var sizem = document.getElementById("m").checked;
//     var sizel = document.getElementById("l").checked;
//     var quantity = document.getElementById("quantity").value;
  
//     var order = {
//       menu: main_menu,
//       ice: ice ? "아이스" : "핫",
//       size: sizem ? "M" : "L",
//       quantity: quantity
//     };
  
//     var order_list = document.getElementById("order_result");
  
//     var temp = menu(order.menu);
//     var price = temp * order.quantity;


//     if(order.size ==="L"){
//       price += 1000;

//     }

//     var out = order.menu + ", " + order.ice + ", " + order.size + ", 수량: " + order.quantity + " - " + price + "원<br>";  
//     if (temp === "판매하지 않는 메뉴입니다.") {
//       alert(temp);
//       document.getElementById("menutext").value = false;
//       document.getElementById("ice").checked = false;
//       document.getElementById("hot").checked = false;
//       document.getElementById("m").checked = false;
//       document.getElementById("l").checked = false;
//       document.getElementById("quantity").value = false;
//       document.getElementById("menutext").focus();
//       return;
//     }
  






    
//     currentOrder = order; // 현재 주문 정보 업데이트
//     order_list.innerHTML += out;
//   }
  
  


// function menu(name) {
//   var money = 0;
//   switch (name) {
//     case "아메리카노":
//       money = 2000;
//       break;
//     case "꿀메리카노":
//       money = 3500;
//       break;
//     case "복숭아아이스티":
//       money = 3000;
//       break;
//     case "다크초코칩프라페":
//       money = 6000;
//       break;
//     case "식혜":
//       money = 3000;
//       break;
//     case "자몽차":
//       money = 5000;
//       break;
//     case "레몬차":
//       money = 5000;
//       break;
//     case "생강차":
//       money = 5000;
//       break;
//     case "둥글레차":
//       money = 4000;
//       break;
//     case "녹차":
//       money = 5000;
//       break;
//     case "블루베리에이드":
//       money = 6000;
//       break;
//     case "망고에이드":
//       money = 6000;
//       break;
//     case "수박주스":
//       money = 4500;
//       break;
   
//       default:
//       money = -1;
//       break;
//   }

//   if (money === -1) {
//     return "판매하지 않는 메뉴입니다.";
//   }

//   return money;
// }


function getId(name){
    return document.getElementById(name);
}

let out=""; // 전역변수 설정 - 어디에도 속하지 않은 변수 
            // var 타입은 재선언이 가능하지만 let 타입은 재선언이 불가 하다 
/*
  
  var a=10;
  var a=40;
  let  b=20;
  let b=30;
  var 타입은 변수를 재생성 할 수 있지만 let는 재생성이 안되는 타입 
*/


function order(){
    var drink = getId("drink");
    var tmp = getId("ice_hot");
    var size = getId("size");

    var total = drink_menu(drink.value); // 결과 값에 대한 함수 
    // 음료에 대한 금액 구하기 - drink_menu라는 함수를 통해 금액을 구한다 .

    if(total==0){ // 판매하지 않는 메뉴 입력 시 
        alert("판매하지 않는 메뉴 입니다");
        drink.value=''; // 음료명 input 값을 비워주기 
        drink.focus(); // 음료명 메뉴에 커서를 위치 한 이후 return 을 한다 .
        return;
    }
    // 사이즈 M이냐 L이냐 or 잘못 입력 했는지 에 대한 것 

    if(!(size.value.toLowerCase()==="m" || size.value.toLowerCase()==="l")){
      alert("M 또는 L 사이즈를 입력하세요");
      size.value="M";
      size.focus();
      return;
    }


    total = total + (size.value.toLowerCase()==='m' ?  0: 1000);
    // 사이즈가 m 이라면 0원 , 1이라면 1000원 추가 

    out += drink.value + " / " + tmp.value + " / " +size.value + " : " +total+ "원"+ "<br>"  


    getId("list").innerHTML=out; // 출력 


    //함수 안에 생성 된 변수는 함수가 종료 되면 제거 된다 . 
    // 즉 , 함수 안에서 생성 한 모든변수는 다시 재사용 안되고 함수 실행 될 때 마다 
    // 초기화 되서 사용된다 .

    // 함수의 밖에 변수를 생성 하면 함수의 생명주기(실행,종료) 와 상관없이 
    // 변수의 값을 유지 할 수 있다 .
    // 이런 변수를 전역 변수라고 한다 .

    //자바스크립트에서의 변수는 크게 두가지로 나뉜다 
    // 전역과 지역 변수 
    // 전역과 지역 변수의 차이는 위치에 따라서 전역이냐 지역 냐 

    // 지역 변수는 블럭 안에서 만들어진 것들은 지역 변수라고 한다 
    // 전역 변수는 전체 영역에서 사용 할 수 있는 변수 이다. 


    //아이스 , 핫이냐 
    // 알파벳을 소문자로 변환 - toLowerCase()
    // 알파벳을 대문자로 변환 - toUpperCase()

    if (!(tmp.value.toLowerCase() === "ice" || tmp.value.toLowerCase() === "ICE" || tmp.value.toLowerCase() === "hot" || tmp.value.toLowerCase() === "HOT")) {
     
    }
    
   
    }


  
function drink_menu(drink){ //드링크 메뉴를 통해서 뽑아 낸다 
  switch(drink){
      case "아메리카노":return 2000; //메뉴 : return 가격;
      case "카페라떼":return 3000;
      case "돌체라떼" : return 4500;
      case "모카라떼" : return 3000;
      case "수박주스" : return 4500;
      case "바나나주스" : return 4500;
      default: return 0;
  }
}

