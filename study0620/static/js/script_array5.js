window.onload=function(){

    let pic = document.getElementsByClassName("picture"); // 배열에 첫번째 주소
    for(var i=0; i<pic.length; i++){ // 배열 
        pic[i].addEventListener("click",same_search); // 8개의 td에 클릭 이벤트 등록 
        pic[i].innerHTML=Math.floor(Math.random()*10)+1;
    }
        
}

function same_search(){


}



