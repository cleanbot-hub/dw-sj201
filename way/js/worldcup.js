// 기본 배열 , 모든 이미지를 다 가지고 있는 기본 배열, 실제 게임에 사용 안함 
const image=['1.png', '2.png', '3.png', '4.png', '5.png',
'6.png', 'goldenretriever.png', 'jindo.png', 'maltese.png', 'mixdog.png', 'papillon.png', 'pomeranian.png', 'poodle.png', 'pug.png', 'schnauzer.png', 'scottishterrier.png',
'shibaInu.png', 'shihtzu.png', 'welshcorgi.png', 'yorkshireterrier.png','cat1.png','cat2.png','cat3.png','gom.png'
];

const kind =["비글","비숑","보더콜리","골든리트리버","진돗개","말티즈","믹스견","파피옹","포메리안","푸들","퍼그","schnauzer","스코티시테리어","시바견","시츄","welshcorgi","yorkshireterrier","고양이1","고양이2","고양이3","곰"

];


let 토너먼트1=new Array(); // 현재 토너먼트
let 토너먼트2=new Array(); // 다음 토너먼트 (현재 토너먼트에서 선택 한 것 )
let 순서=new Array();
let round = 24; // 처음은 24강 
let count =1; // 현재 순서 (처음은 1번)

function 순서섞기(){

}


function 태그선택(id){
    return document.getElementById(id); 
}


window.onload=function(){
    var title = 태그선택("title");
    title.innerHTML=round+"강 " +count+"/"+(round/2);
}