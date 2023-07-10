window.onload = function(){
    var body = document.getElementsByTagName("body");

    // body[0].innerHTML="<div class='lime'> 오늘 비와?</div>";

    var node = document.createElement("div"); // 새로운 tag 만들기 
    node.setAttribute("id","rain"); // 태그에 속성 부여 
    node.addEventListener("click",function(){alert("ㅁㅇㅁㄴㅇ");})
    var text = document.createTextNode("오늘 비 많이와?");
    node.appendChild(text); // 태그에 글씨 넣기 
    body[0].appendChild(node); // 만든 태그를 누구 밑에 ?

}