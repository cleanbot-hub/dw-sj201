const tall = [161, 168, 174, 150];  // 키 데이터 배열
const name = ["송은선", "임민지", "이상준", "김선향"];  // 이름 데이터 배열
const weight=[43,59,72,46];



function tall_avg() {
    var sum = 0;
    $.each(tall, function (i, t) {
        sum += t;
    });
    return sum / tall.length;  // 키 데이터의 평균 계산 및 반환
}

let avg = tall_avg();  // 함수 호출하여 평균값 할당

$("#reg_bt").click(function () {
    if ($("#tall").val() == '' || $("#name").val() == '') {
        alert("이름 또는 키를 입력하세요");
        $("#tall").val() == '' ? $("#tall").focus() : $("#name").focus();
        return;
    }

    if(($("#weight").val()=='')){
        alert("몸무게를 입력하세요");
        $("#weight").val() == '' ? $("#tall").focus() : $("#weight").focus();
    }

    
    tall.push(Number($("#tall").val()));  // 키 데이터 배열에 새로운 값 추가
    name.push($("#name").val());  // 이름 데이터 배열에 이름 추가
    weight.push(Number($("#weight").val()));
    avg = tall_avg();  // 평균값 재계산
    chart.destroy();  // 기존 차트 제거
    draw();  // 새로운 차트 그리기
});

let ctx = $("#bar_chart")[0].getContext("2d");
let chart = '';

draw();

function draw() {
    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: name,  // X축 레이블에 이름 배열 사용
            datasets: [
                {
                label: "201호 키 조사",
                data: tall,  // 키 데이터 배열 사용
                borderWidth: 1,
                backgroundColor: avg_color(),  // 평균 이상일 때 파란색, 미만일 때 빨간색
                indexAxis:"y"
            },
            {
                label: "201호 몸무게 조사",
                data: weight,  // 키 데이터 배열 사용
                borderWidth: 1,
                backgroundColor: "yellow",  // 평균 이상일 때 파란색, 미만일 때 빨간색
                indexAxis:"y"
            }
          ],
        },
       
        
    });
}

function avg_color(){
    var a=[];
    $.each(tall,function(i,t){
        a.push(t>=avg ? "#4374D9" : "#CC3D3D") });
        return a; 

}