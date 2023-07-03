// 기본 배열 , 모든 이미지를 다 가지고 있는 기본 배열, 실제 게임에 사용 안함 
const image=["고양이1.png","고양이2.png","고양이3.png","골든리트리버.png","곰.png","닥스훈트.png",
"말티즈.png","믹스견.png","보더콜리.png","불독.png","비글.png","비숑.png","슈나우저.png","스코티쉬테리어.png"
,"시바견.png","시츄.png","요크셔테리어.png","웰시코기.png","진돗개.png","치와와.png"
,"팡피옹.png","퍼그.png","포메리안.png","푸들.png"
];

const kind =["고양이1","고양이2","고양이3","골든리트리버","곰","닥스훈트",
"말티즈","믹스견","보더콜리","불독","비글","비숑","슈나우저","스코티쉬테리어"
,"시바견","시츄","요크셔테리어","웰시코기","진돗개","치와와"
,"팡피옹","퍼그","포메리안","푸들"

];


let 토너먼트1=new Array(); // 현재 토너먼트
let 토너먼트2=new Array(); // 다음 토너먼트 (현재 토너먼트에서 선택 한 것 )
let 순서=new Array();
let round = 24; // 처음은 24강 
let count =1; // 현재 순서 (처음은 1번)

function 순서섞기(){

    for(var i=1; i<=round; i++){
        var tmp = Math.floor(Math.random() * round); //인덱스는 0부터 시작 
        if(순서.indexOf(tmp) == -1){
            순서.push(tmp);

        }else { 
            --i;
        }
    }


}


function 태그선택(id){
    return document.getElementById(id); 
}


window.onload=function(){ // 처음 시작 할 때 필요한 것 만 이 안에 넣어준다.
    var title = 태그선택("title");
    title.innerHTML=round+"강 " +count+"/"+(round/2);

    토너먼트1 =Array(round).fill().map((arr,i) => i);
    순서섞기();
    show();
    // 이미지 클릭 이벤트 등록 

    var left=태그선택("left");
    var right=태그선택("right");
    left.addEventListener("click",선택);
    right.addEventListener("click",선택);    
}


function final(id){

    



}


function 선택(){
    if(this == 태그선택("left") ) {
        토너먼트2.push([토너먼트1[순서[count*2-2]]]);
        if(round==2) final("left");
    }else{
        토너먼트2.push([토너먼트1[순서[count*2-1]]]);
        if(round==2) final("right");
    }

    if(count == round/2 ){
        round= round/2;
        count=0;
        순서=new Array();
        순서섞기();
        토너먼트1 = 토너먼트2.map((i)>=i);
        토너먼트2=new Array();
    }

    count++;
    var title = 태그선택("title");
    title.innerHTML=round+"강 " +count+"/"+(round/2);
    show();
}


function show(){
    var left=태그선택("leftimg");
    var right=태그선택("rightimg");
    var leftText=태그선택("leftText");
    var rightText=태그선택("rightText");

    left.src="./image/"+image[토너먼트1[순서[count*2-2]]]; // image 인덱스 배열에 있는 것은 0부터 
    right.src="./image/"+image[토너먼트1[순서[count*2-1]]]; // image
    leftText.innerHTML=kind[토너먼트1[순서[count*2-2]]];
    rightText.innerHTML=kind[토너먼트1[순서[count*2-1]]];
}

