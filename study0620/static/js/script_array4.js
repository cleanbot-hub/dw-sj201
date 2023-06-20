// 문자열에서 특정 문자열의 위치를 찾는 방법 - indexOf
// indexOf는 해당 문자열의 위치(인덱스)를 알려준다.
// 배열에서도 indexOf를 사용하여 값을 찾을 수 있다 .
// indexOf함수로 일치하는 데이터를 찾았다면 인덱스를 반환 
// 인덱스는 0 부터 시작 
// 일치하는 데이터를 찾지못하면 -1을 반환  


const name=["이순신","최무선","강감찬","김유신","김춘추","이사부","을지문덕","정도전","정약용",
"장영실","한석봉","박팽년","안중근","김선향","김승겸","김철환","김태형","박수호","송은선","신상수",
"안지영","안태균","이상준","이영주","이우주","이충현","임민지","정길원","정예림","하지원"];




window.onload=function(){

    let srh_bt=document.getElementById("search_btn");
    srh_bt.addEventListener("click", search_name); // search_btn에 이벤트를 등록 시켜라 !!
// addEventListener('이벤트명' ,동작할 함수)
}
function search_name(){
        let input=document.getElementById("search") //    input 태그의 search 를 가져온다   
        let word = input.value;     // 

        let res = document.getElementById("search_result"); // res 변수에 seatch_result 를 가져온다 
        var out="";
        

        for(var i=0; i<name.length; i++){
            if(name[i].indexOf(word) != -1){ //변수[i].indexOf(word) != -1) 
                out+="<p>"+name[i]+"</p>";
                

            }       // 배열 안에서의 묹
         }
         res.innerHTML=out;
        }

