let house = {}; //전체 데이터 저장용

$(function () {
    $.getJSON("./data/test6.json", function (data) {
        house = data; //전체 데이터 저장
        var set = new Set(); // 분류만 골라내기 위한 set
        $("#main").append('<div class="expenBox title"><h3>지출내역</h3>' +
            '<span class="categoryText">분류</span>' +
            '<span class="moneyText">금액</span>' +
            '<span class="detailText">내용</span></div>');
        $.each(house.지출, function (i, d) { // 지출 부분 화면 출력
            set.add(d.분류);
            $("#main").append('<div class="detail">' +
                '<span class="categoryText">' + d.분류 + '</span>' +
                '<span class="moneyText">' + d.금액.toLocaleString() + '원</span>' +
                '<span class="detailText">' + d.내용 + '</span>' +
                '</div>');
        });
        $("#main").append('<div class="incomeBox title"><h3>수입내역</h3>' +
            '<span class="categoryText">분류</span>' +
            '<span class="moneyText">금액</span>' +
            '<span class="detailText">내용</span></div>');
        $.each(house.수입, function (i, d) { // 수입 부분 화면 출력
            set.add(d.분류);
            $("#main").append('<div class="detail">' +
                '<span class="categoryText">' + d.분류 + '</span>' +
                '<span class="moneyText">' + d.금액.toLocaleString() + '원</span>' +
                '<span class="detailText">' + d.내용 + '</span>' +
                '</div>');
        });

        var cg = Array.from(set);
        $.each(cg, function (i, c) { // 분류 ul 태그 추가
            $("#category").append('<li><input type="checkbox" name="category" value="' + c + '">' + c + '</li>');
        });
        $("input[name=category]").change(categorySearch);
    });

    $("#icon").click(function () { // 사이드 접펼
        $(this).toggleClass("open");
        $("#side").toggleClass("sideopen");
        $("#wrap").toggleClass("sideactive");
    });

    $("#word").on("keyup", keywordSearch); // input 입력
    $("#money").on("keyup", moneyBelow); // 금액 입력 부분
});

function categorySearch() {
    var ctg = []; // 선택 한 분류들 저장 할 배열

    $("input[name=category]:checked").each(function () {
        ctg.push($(this).val());
    });

    $(".detail").filter(function () {
        var isShow = true;
        var text = $(this).find(".categoryText").text();
        if (ctg.indexOf(text) == -1 && ctg.length != 0) isShow = false;
        $(this).toggle(isShow);
    });
}

function moneyBelow() {
    var moneyB = $(this).val(); //입력한 금액 가져오기
    if (moneyB != '') { // 금액 입력했다면
        $(".detail").filter(function () {
            var isShow = true;
            var m = $(this).find(".moneyText").text().replace("원", "").replace(/,/g, "");
            if (Number(moneyB) < Number(m)) isShow = false;
            $(this).toggle(isShow);
        });
    }
}

function keywordSearch() {
    var word = $(this).val(); // input 입력값 가져오기

    $(".detail").filter(function () {
        $(this).toggle($(this).text().indexOf(word) > -1);
    });
}

function showList() {
    $("#main").show();
    $("#mychart").hide();
}

let house_chart = null;
let house_chart1 = null;



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}








function showChart() {
    $("#main").hide();
    $("#mychart").show();
    if (!house_chart) { // 차트가 이미 그려지지 않았다면 실행
        var ctx = $("#mycanvas")[0];
        var ctx1 = $("#incomeChart")[0];

        var setE1 = new Set(); // 수입 분류
        var totalE1 = {};
        $.each(house.수입, function (idx, data) {
            var 분류 = data.분류;
            var 금액 = Number(data.금액);

            if (setE1.has(분류)) {
                totalE1[분류] += 금액;
            } else {
                totalE1[분류] = 금액;
            }
            setE1.add(분류);
        });

        var colors1 = Array.from(setE1).map(function () {
            return getRandomColor();
        });

        house_chart1 = new Chart(ctx1, {
            plugins:[ChartDataLabels],
            type: "pie",
            data: {
                labels: Array.from(setE1),
                datasets: [{
                    
                    data: Object.values(totalE1),
                    backgroundColor: colors1,
                }]
            },
            options: {
                plugins: {
                    datalabels: {
                        color: '#fff',
                        font: {
                            weight: 'bold'
                        },
                        formatter: function(value, context) {
                            var dataset = context.dataset;
                            var sum = dataset.data.reduce(function(acc, data) {
                                return acc + data;
                            }, 0);
                            var percentage = ((value / sum) * 100).toFixed(2) + "%";
                            return percentage;
                        }
                    }
                }
            }
        
    

        });

        var setE = new Set(); //지출 분류
        var totalE = {};
        $.each(house.지출, function (idx, data) {
            var 분류 = data.분류;
            var 금액 = Number(data.금액);

            if (setE.has(분류)) {
                totalE[분류] += 금액;
            } else {
                totalE[분류] = 금액;
            }
            setE.add(분류);
        });

        var colors = Array.from(setE).map(function () {
            return getRandomColor();
        });

        house_chart = new Chart(ctx, {
            plugins:[ChartDataLabels],
            type: "pie",
            data: {
                labels: Array.from(setE),
                datasets: [{
                    data: Object.values(totalE),
                    backgroundColor: colors,
                }]
            },
            options: {
                plugins: {
                    datalabels: {
                        color: '#fff',
                        font: {
                            weight: 'bold'
                        },
                        formatter: function(value, context) {
                            var dataset = context.dataset;
                            var sum = dataset.data.reduce(function(acc, data) {
                                return acc + data;
                            }, 0);
                            var percentage = ((value / sum) * 100).toFixed(2) + "%";
                            return percentage;
                        }
                    }
                }
            }




        });
    }
}