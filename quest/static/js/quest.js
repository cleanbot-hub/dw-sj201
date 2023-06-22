function start() {
  var num = document.getElementById("num").value;
  var com1 = Math.floor(Math.random()*3)+1;
  var split = num.split(',');
  var numbers = split.map(function(item) {
    return parseInt(item.trim());
  });
 
  var res = document.getElementById("result");
  res.innerHTML = numbers.join(' ');
  
  for(var i=0; i<numbers.length; i++){
  if(!isNaN(numbers[i])) {
    alert("true");
         }else{
        alert("false");
    
        }
    }
}







