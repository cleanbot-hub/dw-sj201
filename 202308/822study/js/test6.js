let data; // JSON 데이터

$(function() {
    // 사이드바 토글
    $("#icon").click(function() {
        $(this).toggleClass("open");
        $("#side").toggleClass("sideopen");
    });
});

$(document).ready(function() {
    // JSON 데이터를 가져옴 (test6.json 대신 실제 데이터 또는 API 호출)
    $.getJSON('./data/test6.json', function(jsonData) {
        data = jsonData;
        let expenditures = data.지출;
        let incomes = data.수입;

        let expendituresList = $('#expenditures');
        let incomesList = $('#incomes');
        let categories = $('input[name="category"]');

        // 문구 및 금액 필터링 함수
        function filterAndRenderList(keyword, maxAmount, selectedCategories) {
            expendituresList.empty();
            incomesList.empty();

            $.each(expenditures, function(index, expenditure) {
                if (
                    (expenditure.내용.includes(keyword) || expenditure.분류.includes(keyword)) &&
                    expenditure.금액 <= maxAmount &&
                    (selectedCategories.length === 0 || selectedCategories.includes(expenditure.분류))
                ) {
                    let listItem = `<li class='list'><span>분류: ${expenditure.분류}</span><span>금액: ${expenditure.금액}</span><span>내용: ${expenditure.내용}</span></li>`;
                    expendituresList.append(listItem);
                }
            });

            $.each(incomes, function(index, income) {
                if (
                    (income.내용.includes(keyword) || income.분류.includes(keyword)) &&
                    income.금액 <= maxAmount &&
                    (selectedCategories.length === 0 || selectedCategories.includes(income.분류))
                ) {
                    let listItem = `<li class='list'><span>분류: ${income.분류}</span><span>금액: ${income.금액}</span><span>내용: ${income.내용}</span></li>`;
                    incomesList.append(listItem);
                }
            });
        }

       // 차트 버튼 클릭 시
$('#chart_view').on('click', function() {
    $('#main').hide();
    $('#chartContainer').show();
    renderCharts(data.지출, data.수입);
});

// 목록 버튼 클릭 시
$('#list_view').on('click', function() {
    $('#chartContainer').hide();
    $('#main').show();
});

        // 입력 값이 변경될 때마다 필터링 함수 호출
        $('#word, #money, input[name="category"]').on('input change', function() {
            let keyword = $('#word').val();
            let maxAmount = parseInt($('#money').val()) || Infinity;
            let selectedCategories = categories.filter(':checked').map(function() {
                return $(this).val();
            }).get();
            filterAndRenderList(keyword, maxAmount, selectedCategories);
        });

        // 초기 로드 시 전체 내역 출력
        filterAndRenderList('', Infinity, []);
    });

    const usedColors = new Set();

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        
        do {
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
        } while (usedColors.has(color));
        
        usedColors.add(color);
        
        return color;
    }
    
    function renderCharts(expenditures, incomes) {
        let ctx1 = document.getElementById('chart1').getContext('2d');
        let ctx2 = document.getElementById('chart2').getContext('2d');
    
        // 데이터 처리 및 차트 설정 (예시)
        let expenditureLabels = expenditures.map(item => item.분류);
        let expenditureAmounts = expenditures.map(item => item.금액);
        let incomeLabels = incomes.map(item => item.분류);
        let incomeAmounts = incomes.map(item => item.금액);
    
        let expenditureBackgroundColors = expenditureAmounts.map(() => getRandomColor());
        let incomeBackgroundColors = incomeAmounts.map(() => getRandomColor());
    
        let expenditureChart = new Chart(ctx1, {
            type: 'pie',
            data: {
                labels: expenditureLabels,
                datasets: [{
                    label: '지출',
                    data: expenditureAmounts,
                    backgroundColor: expenditureBackgroundColors,
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            let dataset = data.datasets[tooltipItem.datasetIndex];
                            let total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue);
                            let currentValue = dataset.data[tooltipItem.index];
                            let percentage = ((currentValue / total) * 100).toFixed(2);
                            return `${data.labels[tooltipItem.index]}: ${currentValue}원 (${percentage}%)`;
                        }
                    }
                }
            }
        });
    
        let incomeChart = new Chart(ctx2, {
            type: 'pie',
            data: {
                labels: incomeLabels,
                datasets: [{
                    label: '수입',
                    data: incomeAmounts,
                    backgroundColor: incomeBackgroundColors,
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            let dataset = data.datasets[tooltipItem.datasetIndex];
                            let total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue);
                            let currentValue = dataset.data[tooltipItem.index];
                            let percentage = ((currentValue / total) * 100).toFixed(2);
                            return `${data.labels[tooltipItem.index]}: ${currentValue}원 (${percentage}%)`;
                        }
                    }
                }
            }
        });
    }
});
