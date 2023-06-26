let lotto=new Array(); //역대 당첨 번호 저장 될 배열

window.onload=function(){
    // 화면이 전부 로딩 되면 시작하는 함수
        var icon = document.getElementsByClassName("strapIcon");    
        icon[0].addEventListener("click", open_close);
    
        content= document.querySelector("#content");
        
        //파일 선택한걸 화면에 불러오기
        var file = document.querySelector("#lotto"); //css에서의 id가 lotto인걸 가져오기
        file.addEventListener("input", function(e){
            let target = e.target;//선택된 파일참조
            let files = target.files;//선택 된 파일은 배열의 형식으로 저장된다. 
            //첫번째 파일 참조를 해야 내가 선택한 파일을 찾을 수 있다.
            //alert(files[0]); 파일선택하면 알림창이 뜬다.
            let reader=new FileReader();
            reader.addEventListener("load", function(e){
                var str = reader.result;
                //alert(reader.result); txt파일 내용이 알림창에 뜬다.
                var temp=str.split("\n");// split("\n") \n(new line -> enter) 분리하라. 

                for(var i in temp){//for(var i=0; i<temp.length;i++)과 같은 조건
                    //배열을 사용할 때 더 유용한 for문
                    lotto.push(temp[i].split("\t"));//tab을 분리하라.
                }
                //alert(str.split("\n")[0]); 인덱스 0인 자료 출력 -> 1073회차 당첨번호만 알림창에 뜬다.
                alert(lotto[0][3]); //1073회차 2번째 당첨번호(18), lotto는 2차원 배열
            });
            reader.readAsText(files[0]);
        });
}
window.onresize=function(){
    var wd = window.innerWidth; 
    if( wd > 786){//너비가 786보다 작을경우,menu_icon을 누르면 menu_list가 펼쳐지는데 웹브라우저크기가 변하면 펼친게 줄어들게하고싶다
        var list = document.getElementsByClassName("menu_list")[0];
        //열려있을때 웹페이지 크기를 키우면 열린 리스트목록이 안보이도록
        list.style.display="none";
        list.dataset.show='1';
    }
}
function open_close(){
    var list = document.getElementsByClassName("strapIcon")[0].nextSibling;
    //menu_icon을 누르면 menu_list가 펼쳐지는데 웹브라우저크기가 변하면 펼친게 줄어들게하고싶다
    var show = list.dataset.show;
    if(show==1){
        list.style.display="block"; //보인다.
        list.dataset.show='0';
    }else{
        list.style.display="none";//안보인다.
        list.dataset.show='1';
    }

    // var isActive = list.classList.contains("list_active");
    // if(isActive)
    //     list.classList.toggle("list_active");//toggle 삭제
    // else
    //     list.classList.add("list_active");
}

let content=null;

// function win_confirm() {
//     var out = "<div id='input_box'>";
//     var input = "";
//     for (var i = 1; i <= 6; i++) {
//       input += "<input type='number' class='mynum'>";
//     }
//     out += input + "</div>";
//     out += "<div id='bt'><button onclick='check()'>확인</button></div>";
    
//     out +="<div id='result'></div>";
//     content.innerHTML = out;
    
// }
  

function make_num(){ //번호생성부분,랜덤숫자이용해서번호등장
    if(lotto.length==0){
        alert("로또 파일을 먼저 열어주세요"); //파일 선택 안하고, 출현횟수 클릭 시 알림창
        return;
    }

    var out="<table class='makeTable'>";

    for(var n=1; n<=5; n++){
        let lucky_num = new Array();
        
        lucky_num.push(Math.floor(Math.random()*45)+1);
        for(var i=1; i<6;i++){
            var num = Math.floor(Math.random()*45)+1;
            if(lucky_num.indexOf(num) == -1 ){
                lucky_num.push(num);
            }else{
                i--;
            }
        }
        lucky_num.sort(function(a,b){return a-b;})
        //{return b-a;}) 정렬 오름차순

        //로또 숫자를 태그에 담아주기
        out += "<tr>";

        out+="<td class='numTd'>"+n+".</td>";
        for(var i=0; i<lucky_num.length; i++){
            out += "<td class='numTd c"+(parseInt(lucky_num[i]/10))+"'>"+lucky_num[i]+"</td>";
        }
        out += "</tr>";

        //짝,홀 갯수, 총합 
        var even=0, odd=0;  // even 짝, odd 홀
        var total=0;
        for(var i=0; i<lucky_num.length; i++){
            total += lucky_num[i];
            if( lucky_num[i]%2 === 0 ){
                even++;
            }else 
                odd++;
        }

        // 산술적 복합성 값 구하기 (ac)
        var ac = new Array();
        for(var i=lucky_num.length-1; i>=1; i--){
            for(var k=i-1; k>=0; k--){ 
                var tmp = lucky_num[i]-lucky_num[k];
                if(ac.indexOf(tmp) == -1) //중복숫자제외
                    ac.push(tmp);
            }
        }
        //역대 당첨 번호와 비교하기
        for(var i in lotto){//당첨번호는 총 6개 보너스번호 1 , 0~1072의 인덱스를 가진다.
            for(var k=2; k<=7; k++){ //6 18	28	30	32	38	15은 k배열
                //1073	2023.06.24	6	18	28	30	32	38	15 에서 (6 18 28 30 32 38)까지 구하기
                if(ac.indexOf(lotto[i][k])!= -1){ //lotto는 2차원 배열 , 이 당첨 번호가 ac와 같냐....
        /*
         역대 당첨번호와 같은 숫자가 ac 배열에 있다면 ac배열에서 삭제하기    
         배열에 저장 되어 있는 데이터를 삭제하는 방법
         1. 배열이름.pop() - 맨 끝에 있는 마지막 인덱스를 삭제해준다.
         2. 배열이름.splice(인덱스,개수) - 특정 위치의 데이터 삭제, 
            삭제할 데이터의 인덱스와 해당 인덱스부터 몇 개 삭제 할 것인지 개수
        */        
                   var index=ac.indexOf(lotto[i][k]);
                   ac.slice(index,i); 
                }
            }
        }
        out += "<td colspan='7'>"+
        "AC:"+ (ac.length - 5) +' '+ 
        "총합 : "+total+"  "+
        "홀/짝 : "+odd+"/"+even+"</td>";

    } // 5번 반복하는 for문 끝
    out += "</table>";

    //출력
    content.innerHTML = out;
}

// function num_count(){ 
//     alert("출현횟수");
// }

//배열, 실행할 함수 내용을 직접 써서 사용가능 -> 기존에는("사용하고자하는기능",사용하고자하는기능의 함수)
/*
아이콘 클릭하면 menu_list가 보이고 안보이고 >>
(1)class명 활용 -> class를 넣다 뺐다가  
    var icon=document.getElementsByClassName("strapIcon");
    icon[0].addEventListener("click",function(){

    var list=this.nextSibling;
    var isActive=list.classList.contains("list_active");
    
    if(isAcitve)
        list.classList.toggle("list_active");//toggle=삭제시킴
    else
        list.classList.add("list_active");
    
  }); 
(2)this(strapIcon) 활용  
    var list=this.nextSibling list는 태그가 아님, nextSibling은 다음 형제enter의미
    var list=this.nextSibling.nextSibling 하면 enter형제 다음 ul로 들어가서 오류없이 가능

    var list=this.nextSibling.nextSibling;  
    list.style.display="block";
(3)data set이용  
     var list = this.nextSibling;
     var show = list.dataset.show; //show 에는 1이 들어간다.
     if(show==1){
        list.style.display="block"; //보인다
        list.dataset.show=0; 
     }else{
        list.style.display="none"; //안보인다
        list.dataset.show=1; 
     }  
   
    현재 태그(element)의 다음 태그를 가져오는 방법 
    .nextSibling 형제 태그를 의미한다. 
    태그(element) 객체에 클래스를 추가하는 방법
    element.classList.add("클래스이름");
    클래스 여러 개 추가 
    element.classList.add("클래스이름","클래스이름")
    클래스 이름 변경 
    element.classList.replace("변경전이름","변경후이름")
    클래스 삭제
    element.classList.toggle("삭제할 클래스 이름")
    조건에 따라 클래스 삭제
    element.classlist.toggle("삭제클래스이름",조건식)
    태그(element) 객체에 클래스가 있는지 확인하는 방법
    element.classList.contains("클래스이름")
    해당 클래스 이름이 있다면 true, 없으면 false

    dataset
     HTML5부터는 태그에 데이터를 담을 수 있는 개념이 생겼다. 데이터 속성은 태그에 data로 시작한다.
     dataset은 브라우저에 어떠한 행동도 관여하지 않기에 자유롭게 데이터를 넣어 사용하면 된다. 
     자바스크립트에서 활용을 할 수 있고, html에서는 다른 속성 처럼 태그에 영향을 주지 않는다.
     다른 속성이라 하면 width,height,style등등 
     <div width="200">은 width라는 속성에 의해 div 크기에 영향을 준다. 
     하지만 dataset은 영향을 주지 않음

     window.innerWidth - 브라우저의 화면 너비
     window.innerHeight - 브라우저의 화면 높이
     window.outerWidth - 브라우저의 전체 너비
     window.outerHeight - 브라우저의 전체 높이

     브라우저의 크기가 변경되면 동작하는 함수  -> resize()
    
    lotto는 2차원 배열 - 1차원 배열이 두 개 있기 때문에 인덱스도 두 개이다.
    i 변수에는 첫번째 인덱스를 k 변수에는 두번째 인덱스를 표현한다.    
    
*/
