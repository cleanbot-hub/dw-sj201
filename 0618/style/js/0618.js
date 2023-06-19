let out=""; // 전역 변수 - 내가 클릭한 숫자나 연산자를 쌓아두기 위해서 
            // 전역변수가 아니면 지역 변수로 생성 시 클릭 할 때 마다 새로운 
            // 지역변수가 생성된다 . 이전에 클릭했던 내용은 사라진다 .
let op=""; // 연산자를 저장할 전역 변수 
            // 전역으로 만드는 이유는 연산자 입력 후 두번째 숫자를 입력 하기 때문에 
            // 연산자를 함수의 종료와 함께 날려버리면 안되니까 

let num1=0; // 첫번째 연산자
let num2=0; // 두번째 연산자 

function select(val){
    if(val==="="){ // 계산 결과를 보기 위해 = 클릭 했을 경우 실행 되는 if 문 
        out=calc(); // 계산을 하기 위한 함수 , 계산 된 결과를 반환(return) 할 것이다 . 
        
    }else{ 
    out = out+val; // 출력용 누적 
    // alert(out.length);



    if(typeof(val)==='string'){
        op=val;
        //alert("연산자입니다.");
    }
    if(op=== ""){ // op 변수가 빈값이면 연산자를 클릭하기 전이다 .

    num1 = Number(out); // 첫번째 숫자는 연산자를 클릭 하기 전 까지가 첫번째 
                        // 연산자를 클릭한 이후부터는 두번째 피연산자 숫자가 들어와야 한다.
                        // 연산자 이전과 이후가 구분이 되야 피연산자1과 피연산자2로 나누어 줄수 있다. 
    }else { //op 변수가 빈값이 아니라면 두번째 피연산자가 입력 될 것이다 . 

    var index = out.indexOf(op)+1;
    num2= Number(out.slice(index));
 
    } 
}
    
    document.getElementById("result").value=out;     
// 숫자를 입력 하였을 때 result 안에  select  값을 넣어주기 
   
}
   
function calc(){  // 계산 하는 함수 
    
    switch(op){
        case "+":
            return num1=num1+num2;
        case "-":
            return num1=num1-num2;
        case "*":
            return num1=num1*num2;
        case "/":
            return num1=parseInt(num1/num2); // 연산은 소수점 도 나오니까 정수만 
                                        // 나오게 하기 위해 ParseInt
        
  
        
    }                                      
}

