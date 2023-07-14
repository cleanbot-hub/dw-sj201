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

function exit(){
    window.close();
}


let child="";

function winopen(){
    child =  window.open("./child.html","_blank","width=500px,height=400px");
}

function child_close(){
    child.window.close();
}

function child_write(){
    child.document.getElementById("message").innerText="머리카락 휘날리며 와 ";
}

function child_getName(){

    var name = child.document.getElementById("name").value;
    document.getElementById("name").innerHTML=name;
    
}