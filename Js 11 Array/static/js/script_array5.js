
let path="./static/image/";
let image_name=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
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
    for(var i=1; i<20; i++){
        var tmp=Math.floor(Math.random()*12);
        if( image_position.indexOf(tmp) == -1){
            image_position.push(tmp);
        }else{
            --i;
        }
    }
    var img = document.getElementsByClassName("picture");
    for( var i=0; i<img.length; i++){
        img[i].style.background="url("+(path+image_name[image_position[i]%10])+") no-repeat center";
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