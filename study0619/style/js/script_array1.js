/*

        배열 
        데이터들을 다루려면 배열을 다뤄야 한다 

        데이터를 연속적으로 저장 할 수 있는 메모리 공간 

        변수 
            => 단일 데이터를 저장 할 수 있는 메모리 공간 

        프로그램에서 웹에서 표현 하고자 하는 데이터가 많으면 배열을 이용한다 
    

        
       a,b,c,d 시간 차에 의해서 변수가 생성 되는데 
       현재 상태에서의 최적의 위치 
       
       배열은 배열이라는 이름으로 만들어라 
        1. 배열의 각가의 공간은 변수와 같은 공간이다 .
         즉 배열 공간 하나 변수와 같은 방식으로 사용 할 수 있다 .
        2. 자바스크립트에서 배열은 동적 이다 . 공간의 갯수가 늘어나기도 
        줄어들기도 한다. (변수는 정적) 
        
        3. 배열의 인덱스는 0부터 시작한다 .
        4.  

       정적 할당  => 변수 크기에 맞게 
       동적 할당  => 공간을 늘리고 줄이고  

       배열을 만드는 첫번째  방법 
           
*/

/*
var  a = [1,2,3];
var name= ["김승겸","김향선","정예림","이충현"];
var b=[10,20,"아야어여",3.123]; // 서로 다른 type의 데이터를 저장 가능 , 사용을 잘 안함 
var c= "Let's have lunch";
var b= [...c]; // c변수의 문자열을 문자 하나 하나 나누어서 b 배열에 저장 

var  arr = new Array(); // 자바스크립트의 array 생성자를 통해 배열 생성 
                        // Array 생성자는 배열을 생성 하기 위한 녀석 이다 .
                        // 새롭게 넣어줄수 있는 형태 
// ["L","e","t","'","s"," ","h","a","v","e"," ","l","u","n","c","h"]




*/


// var num=10;
//     (num); 


// a = [1,2,3];
// alert(a[1]);




// var good_student=["안지영","박수호","송은선","임민지","정길원","김승겸"];

// for(var i=0; i<6; i++){
//     document.write(good_student[i]);
// }
// // 배열에 저장 된 총 데이터가 몇개냐 ???????? length

// for(var i=0; i<good_student.length; i++){
//     document.write(good_student[i]+"<br>");
// }


// var bad_student=["김선향","신상수","안태균","이상준","한지민","고윤정","박보검"];
// // 위 학생 이름을 한줄에 하나씩 출력 하시오 

// for(var i=0; i<bad_student.length; i++){
//     document.write(bad_student[i]+"<br>");
// }



// // 배열에 데이터를 입력 하기 

// bad_student.push("정예림");
// // push 함수를 사용하여 배열에 새로운 데이터를 추가한다 . 
// 배열의 마지막에 추가로 저장된다 .


// 웹 브라어즤 동작 순서 
// 작성된 순서대로 실행된다 . 
// <html> 실행하고 <head> 실행하고 <script> 실행하고 <body> 실행하고 
// <div> 실앻한다 
// div 가 실행 되기전에 script 가 실행되기 때문에 출력 되지못한다 .





                        var num = new Array();
                            document.write("현재 배열의 크기 : " + num.length);
                            num.push(10);
                            document.write("<br>현재 배열의 크기 : " + num.length);
                            num.push(Math.floor(Math.random()*1000));
                            document.write("<br>현재 배열의 크기 : " + num.length);
                            num.push(Math.floor(Math.random()*1000));
                            document.write("<br>현재 배열의 크기 : " + num.length);
                            
                        window.onload=function(){ // 브라우저에 모든 내용을 출력 한 뒤에 실행 되는 함수 
                                                    // load 함수 

                            
                            var out = document.getElementById("num_output");
                            
                            for(var i=0; i< num.length; i++){
                                out.append(num[i]+" ");
                            
                            
                            }


                    }
