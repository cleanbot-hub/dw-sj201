// 배열을 생성하는 방법 
// 

//1번째 방법  Array1 = new Array();
//2번째 방법  var a = [1,2,3,4,5];
 
// 배열의 크기 - array1.length

//


// var number =[10,32,54,65,34,59,60];
// for(var i=0; i<number.length; i++){
//     document.write(number[i] + "<br>");
// }

// var number2 = new Array();
// // 5개 정수 입력하여 배열에 저장하기 

// for(var i=0; i<5; i++){
//     number2.push(prompt());
   
// }


// var names= ["하지원","한지민","전지현","손예진","한가인"];
// for(var i=0; i<names.length; i++){
//     document.write(names[i]+ "<br>");
// }


// 배열에 새로운 값 저장 할 때는 인덱스를 사용하면 안된다.
// var number = new Array();
// for(var i=1; i<100; i++){
//     number.push(Math.floor(Math.random()*200)+1); // 1에서 200까지의 랜덤 값이 저장이 된다 
// }

// for( var i=0; i<number.length; i++){
//     if(!(number[i]%3 == 0 || number[i]%5 == 0)) 
//     // 같지 않다라는 연산자 사용 이 어려울수가 있다 제외할 데이터를 ! 붙혀준다. 
//     // 
//     document.write(number[i] + "<br>");
// }

/* 
var let const 차이점 
var 타입은 재선언이 가능하고 데이터의 수정이 가능하다.
var a=10;
var a=20; 재선언 
a=30; 데이터 수정 

let 타입은 재선언이 안되고 
let b=10;
let b=30; 재선언 불가 - 오류 
b=50; 데이터 수정 가능 

const 타입은 재선언 불가 , 데이터 수정 불가 
const c=10;
const c=30; 재선언 불가 
c=50; 데이터 수정 불가 
*/


const name=["이순신","강감찬","최무선","장영실","이성계","정도전"];

//html 문서의 내용이 브라우저에 모두 표시되면 (load)
//태그가 만들어진 다음에 동작는 다음 
window.onload=function(){ 

    var list= document.getElementById("list");
    
    var out=""; // name 배열의 값을 하나씩 담아줄 출력할 내용의 변수를 설정 
                // div에 innerHTML 로 넣어줄 것인데 반복문안에서 innerHTML을 
                // 사용하면 덮어쓰기가 되기 때문에 out 변수에 출력할 내용을 
                // 모아둔다.

        // alert(name[0]);

      for(var i=0; i<name.length; i++){
        out += "<span>"+name[i]+"</span>";
      }          
      // out 변수 안에는 <span> 이순신 </span><span>강감찬</span><span>최무선</span><span>장영실</span><span>이성계</span><span>정도전</span>
        list.innerHTML=out;    
    }

// 




