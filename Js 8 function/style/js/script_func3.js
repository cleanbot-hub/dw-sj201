// 시간을 다루는 능력
//setTimeOut (), setInterval()
//setTimeOut() =>  지정한 시간 이후에[ 동작 시키는 함수 
//  setTimeOut(실행할 함수, 시간(밀리세컨드) );

//setInterval() => 지정한 시간 주기로 계속 동작 
 //setInterval(실행할 함수, 시간(밀리세컨드));
let game=0;
 function start(){
        
    document.getElementById("print").innerHTML="";
    game = setInterval(change_img , 100 );
        // game 이라는 변수에 어떤것이 저장 이 되는 가 ? 
        // game 변수에는 setinterval의 핸들 값 이 저장된다 .
        // interval id sms setinterval의 함수의 고유 이름이다 
        // interval id를 통해서 setintervla 를 중지 시킬 수 있다 .
        // interval id 는 숫자로 되어 있다 .       
}

let change =1; //전환 


    function change_img(){
        var front = "coin_front.png"; // 앞면 이미지 
        var back = "coin_back.png"; // 뒷면 이미지 
        var imgtag = document.getElementById("500");
        if(change==1){  //전환 1 일때 뒷면 
            imgtag.src="./style/image/"+back; 
            change=0; // 전환 0 앞면 
        }else{
            change=1; // 전환 1
            imgtag.src="./style/image/"+front;
        }
    }

    function fect(select){
        if(select == change){
            clearInterval(game);

            var front = "coin_front.png"; // 앞면 이미지 
            var back = "coin_back.png"; // 뒷면 이미지 
            var imgtag = document.getElementById("500");
            if(change==1){  //전환 1 일때 뒷면 
                imgtag.src="./style/image/"+back; 
            }else{
                imgtag.src="./style/image/"+front;
            }



            if(select == change){
                document.getElementById("print").innerHTML="success";
            }
         
        }

    }