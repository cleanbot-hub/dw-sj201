const category=[
    ["급여","캐시백","복권","환급금","기타수익","이자"],
    ["교통비","통신비","외식","주유","연애","문화생활","쇼핑"]
]
let ctx1= "", ctx2="" , pi1='', pi2='';
 const income=[]; // 수입 머니 저장 배열
 const expen=[]; // 지출 머니 저장 배열 







$(function(){ // 시작 
    ctx1 = $("#pi1")[0]; //첫번째 캔버스
    ctx2 = $("#pi2")[0]; //두번째 캔버스 
    // 머니 배열 초기화 
    for(var i=0; i<category[0].length; i++)income.push(0);
    for(var i=0; i<category[1].length; i++)expen.push(0);

    $(".labels").click(function(){ //.labels 를 클릭 하였을 때 
        
        if($(this).hasClass("choice") ) return; // 현재 클릭 한 labels가 choice를 가지고 있으면 아무것도 변하지 않게 설정
        $(".labels").toggleClass("choice"); // labels 클릭 하였을 때 toggle 
        $(".input_wrap").toggle(); // labels 클릭 하였을 때 input_wrap 이 보인다
    }); // labels 닫는 태그    

    $.each(category, function(i,c){ // category 배열을 가져온다 
            $.each(category[i],function(k,t){
                $(".category").eq(i).append("<option value='"+i+"-"+k+"'>"+t+"</option>");
                    
            })
 
    })// each 닫는 태그
    
        $("#income_bt").click(income_chart); //수입 등록 버튼 클릭시 차트 그리기
        $("#expen_bt").click(expen_chart); // 지출 등록 버튼 클릭 시 차트 그리기 
}) // 시작 - 끝 


function income_chart(){ // 수입을 입력 하면 수입 배열에 저장 되게 
        if ($("#income_money").val()==''){ //수입금액에 값이 비어 있다면 
            alert("수입금액을 입력하세요"); // 경고창 
            $("#income_money").focus(); return;// 마우스 커서
        } // if 문 닫는 태그
        var cidx = $("#income_category").val().split("-"); // select value 값 가져와서 category 배열애 사용
        income[cidx[1]] += parseInt(($("#income_money").val() )); // 수입 머니 저장 배열 에 수입머니 카테고리 저장
        if(pi1 != '')pi1.destory();
        income_pi();
    } // income_chart 닫는 태그


function expen_chart(){
        if($("#expen_money").val()==''){
            alert("지출금액을 입력하세요");
        $("#expen_money").focus(); return; 
        }
} // expen_chart 함수 닫는 태그 



function income_pi(){
    pi1 = new Chart(ctx1,{
        type:"pie",
        data:{
            labels:category[0],
            datasets:[{
                data:income,
                
            }]
        }

    });
}