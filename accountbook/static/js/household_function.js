// household_function.js

window.onload=function(){
    var today = new Date();
    var year = today.getFullYear(); //년도
    var month = today.getMonth()+1; // 월
    var date = today.getDate(); // 일
    var hour=today.getHours(); // 시간
    var minute=today.getMinutes();//분
   
   
    var wdate= document.querySelector("#wdate");
    wdate.value=year+"-"+month+"-"+date+" "+hour+":"+minute;
    


    wdate.addEventListener("change",function(){
        alert(this.value);
    });
}