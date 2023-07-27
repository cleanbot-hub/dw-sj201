// household_function.js

const category=["편의점","카페","음식점","문화생활","여행","교통","마트","관리비","세금",
"온라인쇼핑","경조사","기부","교육","의료","유흥","미용","통신비"];



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