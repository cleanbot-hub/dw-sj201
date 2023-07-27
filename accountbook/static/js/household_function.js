// household_function.js



function two_digit(num){
    return num<10 ? "0"+num : num ;
}



window.onload=function(){
    var today = new Date();
    var year = today.getFullYear(); //년도
    var month = two_digit(today.getMonth()+1); // 월
    var date = two_digit(today.getDate()); // 일
    var hour=two_digit(today.getHours()); // 시간
    var minute=two_digit(today.getMinutes());//분
    
    // month = month<10 ? "0" +month : month;
    // date = date<10 ? "0" +date: date;
    // hour = hour<10 ? "0" +hour : hour;
    // minute = minute<10 ? "0" +minute:minute;
   
    var wdate= document.querySelector("#wdate");
    wdate.value=year+"-"+month+"-"+date+" "+hour+":"+minute;
    


    wdate.addEventListener("change",function(){
        alert(this.value);
    });
}