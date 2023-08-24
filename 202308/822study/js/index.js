let data = {}; // 전역 변수로 데이터 객체 선언

async function getData() {
    const response = await fetch("./data/822.json"); // 데이터 가져오기
    const json = await response.json(); // JSON으로 변환
    return json;
}

$(async function() {
    data = await getData(); // 데이터 불러와서 전역 data 객체에 저장

    const studentList = data.학생; // 학생 정보 배열

    // 학생 정보를 반복해서 HTML에 추가
    studentList.forEach(student => {
        const teacher = data.담임.find(teacher => teacher.반 === student.반); // 학생의 담임 찾기

        $("#list_wrap").append(
            "<div class='info'>" +
            "<ul class='dt'>" +
            "<li class='name'>이름: " + student.이름 + "</li>" +
            "<li class='ban'>반: " + student.반 + "</li>" +
            "<li class='myteacher'>담임: " + (teacher ? teacher.이름 : "없음") + "</li>" +
            "<li class='t'>키: " + student.키 + "</li>" +
            "<li class='e'>시력: " + student.시력 + "</li>" +
            "<li class='w'>몸무게: " + student.몸무게 + "</li>" +
            "</ul></div>"
        );
    });

    $("#detail_bt").click(function() {
        $(".search_detail").toggle();
    });
});

$("#word").on("keyup",default_search);
$("#word").next().click(default_search);

$(".search_detail input").on("keyup", detail_search);
$("#cls").change(detail_search);

function detail_search(){
    var minT=0,maxT=0,minW=0,maxW=0;
    minT = parseInt(($("#minTall").val()))
    maxT = parseInt(($("#maxTall").val()))
    minW = parseInt(($("#minEyes").val()))
    maxW = parseInt(($("#maxEyes").val()))
}


function default_search(){

    var word = $("#word").val();

    $(".info").filter(function(){
        $(this).toggle( $(this).find(".name").text().indexOf(word)> -1);
    })
}
