const board_img=["김세정.jpeg","김태리.jpeg","김태희.jpeg","문근영.jpeg","김현중.jpeg",
"뉴진스.jpeg","레드벨뱃.jpeg","문채원.jpeg","박서준.jpeg","박화요비.jpeg",
"솔지.jpeg","송혜교.jpeg","신지.jpeg","아이유.jpeg","이민영.png",
"장리인.jpeg","정인.jpeg","지연.jpeg","지효.jpeg","bts.jpeg",
"정우성.jpeg","이준기.jpeg","이루.jpeg","강소라.jpeg","진세연.jpeg",
"박신혜.jpeg","이유비.jpeg","김소연.jpeg"]

const board=[];
var gamer=[]; // 참가자 정보 저장 

$(function(){
    for(var i=0; i<28; i++){ board.push(0);}
    initBoard();
    draw();
    $("#setBt").click(setOpen);
    $("#dice_bt").click(dice_turn);
    
    
    t=setInterval(() => { // 참가자 등록 완료될때까지  감시 하기
        if(gamer.length>0){
            //console.log(gamer);
            $("#dice_bt").attr('disabled',false);
            draw();  // 참가수 만큼 말 그리기
            clearInterval(t);
        }
    }, 50);
});




