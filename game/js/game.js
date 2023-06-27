
const Brow=5;
const Bcol=5;


let game_state = false; // 시작 여부 확인 
let bingo=new Array(); // 빙고 숫자 배열 








window.onload=function(){
    var board=document.querySelector("#board"); // board 라는 테이블 에 5줄 5칸 짜리 테이블 만들기
    var out="";
        for(var i=1; i<=Brow; i++){ // 줄 
            out += "<tr>"; // 칸을 표현 해주는 
            for(var k=1; k<=Bcol; k++){ // 칸 
                out += "<td class='Gnum'></td>"; // 칸을 표현 해주는 td
            }
            out += "</tr>";
        }
        board.innerHTML=out;







        var state = document.querySelector("#state_board"); // state_board 테이블에도 만들어주기
        var out="";
        for(var i=0; i<=1; i++){
            out += "<tr>";
            for(var k=1; k<=25; k++){
                out +="<td class='stnum'>"+(i*25+k)+"</td>";
            }
            out += "</tr>";
        }
        state.innerHTML=out;



    }


    function init(){
        // 25개 숫자 중복 없이 랜덤하게 생성 
        for(var i=0; i<25; i++){
            var tmp=Math.floor(Math.random()*50)+1;
            if(bingo.indexOf(tmp) == -1)
                bingo.push(tmp);
            else 
                 i--;
        }
        // td 클릭 이벤트 등록과 25개 숫자 td에 출력  

        var td = document.querySelectorAll(".Gnum");
        for( var i=0; i<td.length; i++){
            td[i].addEventListener("click",bingo_check);
            td[i].innerText=bingo[i];
        }




    }



    function start(){
        if(game_state){
            alert("게임이 진행중입니다");
            return;
        }
        init();
        game_state=true;
    }


    function bingo_check(){

    }