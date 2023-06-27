const fruit=['말티즈','푸들','포메라니안','믹스견','치와와',
'시추','골든리트리버','진돗개','요크셔테리어','비글',
'월시코기','닥스훈트','슈나우저','보더콜리','프렌치불독',
'퍼그','파피용','시바견','비숑프리제','스코티쉬테리어']


let game_state=false;
let path="./image/";
let image_name=["beagle.png","bichonfrize.png","bordercollie.png","chihuahua.png","dachshund.png",
"frenchbulldog.png","goldenretriever.png","jindo.png","maltese.png","mixdog.png","papillon.png","pomeranian.png","poodle.png","pug.png","schnauzer.png","scottishterrier.png",
"shibaInu","shihtzu","welshcorgi","yorkshireterrier"];
let image_position=new Array();
let isStart=false;
let count=0;
let end_count=0;
let isSame=[];
let selectImg=new Array();



window.onload=function(){
    
    var start_bt = document.getElementById('start');
    start_bt.addEventListener("click",game_start);
    var count = document.getElementById("count");
    count.innerText=0;
}


function image_init(){
    image_position.push(Math.floor(Math.random()*12));
    for(var i=1; i<12; i++){
        var tmp=Math.floor(Math.random()*12);
        if( image_position.indexOf(tmp) == -1){
            image_position.push(tmp);
        }else{
            --i;
        }
    }
    var img = document.getElementsByClassName("picture");
    for( var i=0; i<img.length; i++){
        img[i].style.background="url("+(path+image_name[image_position[i]%6])+") no-repeat center";
        img[i].style.backgroundSize="contain";
    }
}
function game_start(){
    if(isStart){
        return;
    }
    image_init(); 
    var td = document.getElementsByClassName("picture_box");
    for(var i=0; i<td.length; i++){
        td[i].addEventListener("click", compare_img);
        isSame.push(false);
    }
    setTimeout(function(){
        var div = document.getElementsByClassName("picture");
        for(var i=0; i<div.length; i++){
            div[i].style.display="none";
        }
    },2000);
    isStart=true;
}
function compare_img(){
    if(!isStart){ return;}


    if(count ==30){

    alert("다음 기회에 도전하세요");
    isStart=false;
    return;

    }


    var cnt = document.getElementById("count");
    cnt.innerText = ++count;


    var child_div = this.firstChild;
    child_div.style.display="block";

    
    let div = document.getElementsByClassName("picture");
    for(var i=0; i<div.length; i++){
        if(div[i] === child_div)
        selectImg.push[i];
    }
     
    if(selectImg.length == 2){
        if(image_position[selectImg[0]]%6 == image_position[selectImg[1]]%6){
                isSame[selectImg[0]] = true;
                isSame[selectImg[1]] = true;
                 selectImg=new Array();
                end_count++;
            
        }else{
                setTimeout(function(){
                    selectImg = new Array();
                    let pic= document.getElementsByClassName("pictrue");
                    for(var i=0; i<isSame.length; i++){
                        if(!isSame[i]){
                            pic[i].style.display="none";
                        }
                    }
                }, 1000);
            }
    }

    
}

if(end_count == 6){
    alert("게임 끝");
    isStart=false;
}




function search_Element(obj){

}