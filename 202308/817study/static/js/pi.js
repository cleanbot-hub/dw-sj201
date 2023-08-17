const category = [
    ["급여", "캐시백", "복권", "환급금", "기타수익", "이자"],
    ["교통비", "통신비", "외식", "주유", "연애", "문화생활", "쇼핑"]
];
let ctx1 = "", ctx2 = "", pi1 = '', pi2 = '';
const income = []; // 수입 머니 저장 배열
const expen = []; // 지출 머니 저장 배열 

$(function () { // 시작
    ctx1 = $("#pi1")[0]; // 첫 번째 캔버스
    ctx2 = $("#pi2")[0]; // 두 번째 캔버스

    // 머니 배열 초기화
    for (var i = 0; i < category[0].length; i++) income.push((10-i)*1000);
    for (var i = 0; i < category[1].length; i++) expen.push((Math.floor(Math.random()*100))*1000);
    income_pi();
    expen_pi();

    $(".labels").click(function () {
        // .labels 클릭 시 이벤트 처리
        if ($(this).hasClass("choice")) return;
        $(".labels").toggleClass("choice");
        $(".input_wrap").toggle();
    });

    // 카테고리 옵션 생성
    $.each(category, function (i, c) {
        $.each(category[i], function (k, t) {
            $(".category").eq(i).append("<option value='" + i + "-" + k + "'>" + t + "</option>");
        });
    });

    // 수입 등록 버튼 클릭 시 차트 그리기 함수 연결
    $("#income_bt").click(income_chart);

    // 지출 등록 버튼 클릭 시 차트 그리기 함수 연결
    $("#expen_bt").click(expen_chart);

}); // 시작 - 끝

function income_chart() {
    if ($("#income_money").val() == '') {
        alert("수입금액을 입력하세요");
        $("#income_money").focus();
        return;
    }
    var cidx = $("#income_category").val().split("-");
    income[cidx[1]] += parseInt($("#income_money").val());
    if (pi1 !== null) pi1.destroy();
    income_pi();
}

function expen_chart() {
    if ($("#expen_money").val() == '') {
        alert("지출금액을 입력하세요");
        $("#expen_money").focus();
        return;
    }
    var cidx = $("#expen_category").val().split("-");
    expen[cidx[1]] += parseInt($("#expen_money").val());
    if (pi2 !== null) pi2.destroy();
    expen_pi();
}

function income_pi() {
    pi1 = new Chart(ctx1, {
        type: "pie",
        data: {
            labels: category[0],
            datasets: [{
                label: "수입",
                data: income,
                backgroundColor: [
                    "green",
                    "red",
                    "blue",
                    "skyblue",
                    "cyan",
                    "orange"
                ],
                borderAlign:"center",
                borderWidth:0,
            }]
        }
    });
}

function expen_pi() {
    pi2 = new Chart(ctx2, {
        type: "pie",
        data: {
            labels: category[1],
            datasets: [{
                label: "지출",
                data: expen,
                backgroundColor: [
                    "green",
                    "red",
                    "blue",
                    "skyblue",
                    "cyan",
                    "orange",
                    "darkred"
                ],
                borderAlign:"inner",
                borderWidth:0,
            }]
        }
    });
}


