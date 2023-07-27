// household_function.js

const category=["편의점","카페","음식점","문화생활","여행","교통","마트","관리비","세금",
"온라인쇼핑","경조사","기부","교육","의료","유흥","미용","통신비","급여","기타수입","로또","월세"];


const card=[{name:"IBK기업은행체크카드",bank:"ibk"},
{name:"신한체크카드",bank:"sh"},
{name:"카카오체크카드",bank:"kakao"}];

const bank=[{name:"IBK기업은행",bank:'ibk',money:100000},
{name:"신한은행",bank:'sh',money:1000000},
{name:"카카오뱅크",bank:'kakao',money:6000000}];

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
    

    var cate = document.querySelector("#wcategory");

    for(var i=0; i<category.length; i++){
        var opt = document.createElement("option");
        opt.setAttribute("value",category[i]);
        opt.innerText=category[i];
        cate.appendChild(opt);
    }
 
    var mycard=document.querySelector("#mycard");
    for(var i in card){
        var opt = document.createAttribute("option");
        opt.setAttribute("value",card[i].bank);
        opt.innerText=card[i].name;
        mycard.appendChild(opt);
    }

    var mybank=document.querySelector("#mybank");
    for(var i in bank){
        var opt = document.createAttribute("option");
        opt.setAttribute("value",bank[i].bank);
        opt.innerText=bank[i].name;
        mybank.appendChild(opt);
    }

}