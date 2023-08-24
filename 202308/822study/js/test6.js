let data; // JSON 데이터

$(function() {
    // 사이드바 토글
    $("#icon").click(function() {
        $(this).toggleClass("open");
        $("#side").toggleClass("sideopen");
    });
});

$(document).ready(function() {
    let usedColors = new Set(); // 이미 사용된 색상을 기록하는 Set

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

        // 차트 색상을 중복되지 않게 선택하는 함수
        function getRandomColor(usedColors) {
            const predefinedColors = [
                '#FF5733', '#C70039', '#900C3F', '#581845',
                '#0074D9', '#7FDBFF', '#39CCCC', '#3D9970',
                '#2ECC40', '#01FF70', '#FF851B', '#85144b'
            ];

            const availableColors = predefinedColors.filter(color => !usedColors.has(color));
            const randomIndex = Math.floor(Math.random() * availableColors.length);
            const selectedColor = availableColors[randomIndex];
            usedColors.add(selectedColor);
            return selectedColor;
        }

        function renderCharts(expenditures, incomes) {
            let ctx1 = document.getElementById('chart1').getContext('2d');
            let ctx2 = document.getElementById('chart2').getContext('2d');

            // 데이터 처리 및 차트 설정
            let expenditureDataMap = new Map();
            expenditures.forEach(item => {
                if (!expenditureDataMap.has(item.분류)) {
                    expenditureDataMap.set(item.분류, 0);
                }
                expenditureDataMap.set(item.분류, expenditureDataMap.get(item.분류) + item.금액);
            });

            let incomeDataMap = new Map();
            incomes.forEach(item => {
                if (!incomeDataMap.has(item.분류)) {
                    incomeDataMap.set(item.분류, 0);
                }
                incomeDataMap.set(item.분류, incomeDataMap.get(item.분류) + item.금액);
            });

            let expenditureLabels = Array.from(expenditureDataMap.keys());
            let expenditureAmounts = Array.from(expenditureDataMap.values());
            let incomeLabels = Array.from(incomeDataMap.keys());
            let incomeAmounts = Array.from(incomeDataMap.values());

            let expenditureBackgroundColors = expenditureAmounts.map(() => getRandomColor(usedColors));
            let incomeBackgroundColors = incomeAmounts.map(() => getRandomColor(usedColors));

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
                                let currentValue = data.datasets[0].data[tooltipItem.index];
                                let formattedValue = new Intl.NumberFormat('ko-KR').format(currentValue);
                                return `${data.labels[tooltipItem.index]}: ${formattedValue}원`;
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
                                let currentValue = data.datasets[0].data[tooltipItem.index];
                                let formattedValue = new Intl.NumberFormat('ko-KR').format(currentValue);
                                return `${data.labels[tooltipItem.index]}: ${formattedValue}원`;
                            }
                        }
                    }
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
});
