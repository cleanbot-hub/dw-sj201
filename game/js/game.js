

const fruit=['수박','사과','귤','참외','토마토'
,'키위','감','배','포도','무화과'
,'석류','대추','망고','유자','자두',
'딸기','복숭아','바나나','멜론','라임',
'구아바','홍옥','용과','페피노','체리',
'레몬','자몽','살구','파파야','코코넛',
'홍시','복분자','머루','잣','밤',
'낑강','한라봉','두꾸','산딸기','뱀딸기',
'앵두','레드향','신고','람부탄','두리안'
,'으름','거봉','여주','만다린','모과'


]

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
                out +="<td class='stnum'>"+(fruit[i*25+k-1])+"</td>";
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
            td[i].innerText=fruit[bingo[i]-1];
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
        var col=0,row=0,cross=[];
        for(var i=0; i<=bingo.length;i++){
            for(var k=0;k<5;k++){
                
            }
        }
    }