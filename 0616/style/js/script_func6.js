let com_num=0;
let win=0, lose=0, draw=0;
let tern=false, play=false;
 function start(){
    if(tern){
        alert("아직 게임이 끝나지 않았습니다. 유저 턴을 기다리세요")
        return;
    }
    
    com_num = Math.floor(Math.random()*6 )+1;

    let com = document.getElementById("com");
    com.src="./style/image/dice"+com_num+".png";
    tern=true;
 }
 function mydice(){
    if(!tern ){  // 내차례가 아니면 주사위 못 던진다. 
        alert("당신의 턴이 아닙니다.")
        return;
    }
    tern=false;
    let user_num = Math.floor(Math.random()*6)+1;
    let user = document.getElementById("user");
    user.src="./style/image/dice"+user_num+".png";
    // 컴퓨터 주사위값도 나왔고, 내 주사위 값도 나왔으니
    //  결과 출력하기
    var res = document.getElementById("result");
    if( com_num == user_num){
        res.innerText= "무";
        draw++;
    }else if(com_num < user_num){
        res.innerText="승";
        win++;
    }else{
        res.innerText="패";
        lose++;
    }
    document.getElementById("recoard").innerText=win+"승 "+lose+"패 "+draw+"무";
 }
