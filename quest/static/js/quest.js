// 베스킨 라빈스 31 만들기
// 숫자를 1~3개 입력 하세요 
// 내가 입력 한 숫자 다음 숫자 부터 컴퓨터가 숫자를 불러야 합니다.
// 내가 입력하는 숫자 예시 - 1,2,3 반드시 이런식으로 입력하기 
// 숫자 사이에 , 넣어서 입력 
// split 이라는 함수를 찾아보세요 그래야 문제를 해결 할 수 있습니다.
//(이 문제는 배열 문제 입니다.)

function start() {
  var num = document.getElementById("num").value;
  var split = num.split(',');
  var numbers = split.map(function(item) {
    return parseInt(item.trim());
  });
 
  var res = document.getElementById("result");
  res.innerHTML = numbers.join(' ');
  
  for(var i=0; i<numbers.length; i++){
  if(!isNaN(numbers[i])) {
    alert("숫자 입니다  ");
         }else{
        alert("숫자가 아닙니다");
    
        }
    }
}




