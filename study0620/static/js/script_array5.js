
let num = new Array();

function init(){ // 초기화 

// 중복 없이 랜덤 값 넣기 
// indexOf를 이용해서 -1이 나오면 일치하는 게 없다 
// 즉 중복되는 숫자가 없다는 뜻이니까 배열에 저장 
    num.push(Math.floor(Math.random()*10)+1); // 첫번째는 그냥 데이터
    for(var i=1; i<=3; i++){
        var temp= Math.floor(Math.random()*10)+1;
        if(num.indexOf(temp) == -1){ 
            num.push(temp);
        } else { 
            i--;
        }



    } // 1부터 3까지의 숫자를 반복한다 
    
}

    // 중복없이 랜덤 값 넣기 




window.onload=function(){
    init(); // 초기화 함수 실행 
    let pic = document.getElementsByClassName("picture"); // 배열에 첫번째 주소
    for(var i=0; i<pic.length; i++){ // 배열 
        pic[i].addEventListener("click",same_search); // 8개의 td에 클릭 이벤트 등록 
        pic[i].innerHTML=num[i%4];

    }
        
}

function same_search(){


}



