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




window.onload= function(){
document.write( pen.name );
document.write( pen.color.split(",") );

};




// 객체 생성 2번째 방법 

function person(name, age, addr) {
    this.name = name;
    this.age = age;
    this.addr = addr;

}

person.prototype.group="201호";



person.prototype.output=function(){
    document.write("<br>"+this.name+"너는 할 수 있다.");
}


var div = document.getElementById("box");

div.prototype.out=function(){
    
}
// 함수 -> 메서드 
// 함수 - 독립적으로 실행되는 코드의 집합체 
// 메서드 - 객체에 귀속되어 객체에 의해 실행 되는 코드의 집합체 
// 객체에 메서드를 정의 하면 모든 객체에 메서드가 생성된다 .
// 객체가 100개라면 메서드도 100개 된다.
// 문제점 . 모든 객체의 속성의 값은 다르지만 메서드의 내용은 동일하다 .
// 동일한 내용의 메서드를 다수 생성하여 사용하는 방법은 비효율적이다.
// 컴퓨터의 메모리 공간만 쓸데 없이 차지한다.
// 해결책 . 메서드를 하나만 생성이 되도록 만든다 . 
// 객체를 1000개 생성해도 메서드는 1개만 존재하게 만든다 .




const p = new Array();
p.push(new person("빵빵이", 27, "동구"));
p.push(new person("김빵빵", 23, "서구"));
p.push(new person("이빵빵", 31, "서구"));

window.onload=function(){
    document.write(p[0].name);
    document.write(p[1].name);
    p[0].output();
};


// 객체 생성 3번째 방법 

const baby = {
    firstname:"신",
    lastname:"향선",
    age : 2
}



