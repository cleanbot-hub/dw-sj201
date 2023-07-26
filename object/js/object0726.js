/* 

객체란 무엇이낙 ?
객체는 O 이다 
객체는 O 다 
객체는 O ek 
객체는 땡땡이 핸드폰 이다 
객체는 땡땡 이어폰이다 

객체는 무엇이든지 객체 일 수 있다 

땡땡이라는 객체는 이름이라는 속성의 값이 홍길동이고 
나이라는 속성의 값이 33이고 성별이라는 속성이 남자 일 수 있다 

커피라는 객체 이름 : 아메리카노, 원두 : 케냐, 용량 : 1L
커피라는 객체 이름 콜드브루 , 원두 : 콜롬비아 , 용량 : V
사람은 객체이다 
사람 객체 이름 : 신상수 , 나이 : 37 
사람 객체 이름 : 송은선 , 나이 : 21

div 라는 객체 id:box , color : pink , width : 300 , position : fixed 
div 라는 객체 id:box1 , color : red , 너비 : 400, position : absolute

div 객체 class: a , color : blue 
div 객체 class: a , color : blue 



*/

let 빵빵 = new Object(); // 객체 생성 
빵빵.나이=33; // 빵빵이라는 객체에 나이라는 속성과 값으로 33 저장 
빵빵.이름="김빵빵";//빵빵이라는 객체에 이름이라는 속성과 값은 김빵빵 저장 
빵빵.키=140; // 빵빵이라는 객체에 키라는 속성과 값은 140 저장 
빵빵.몸무게=50; // 빵빵이라는 객체에 몸무게라는 속성과 값으로 50을 저장
빵빵.시력=2.5; // 빵빵이라는 객체에 시력이라는 속성과 값으로 2.5를 저장 

//객체는 object 또는 객체라고 부른다. 
// 속성은 attribute 라고 한다 (영어로 ), 값은 value 

let pen= new Object();
pen.name="삼색볼펜";
pen.color="red,blue,black";
pen.made="korea";
pen.company="빵빵";

window.onload=function(){
document.write(pen.name);
document.write(pen.color.split(","));
}


