const day=["5월","6월","7월","8월","9월"];
const clove = [34,56,86,43,12]; 
const plove = [11,24,95,35,23]; 
const nlove =[8,43,100,100,100]; 
const hlove =[0,5,70,89,94,14]; 





$(document).ready(function () {
    const canvas = $('#line1')[0]; // 캔버스 요소를 jQuery를 사용하여 가져옵니다.

    const mixedChart = new Chart(canvas, {
        type: 'bar', // 초기에는 막대 그래프로 설정되며, 나중에 선 그래프 데이터셋을 추가합니다.
        data: {
            labels: day, // x 축 레이블로 사용할 월 데이터
            datasets: [
                {
                    label: 'Clove',
                    data: clove,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)', // 막대 색상
                },
                {
                    label: 'Plove',
                    data: plove,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)', // 막대 색상
                },
                {
                    label: 'Nlove',
                    data: nlove,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)', // 막대 색상
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true, // y 축의 시작값을 0으로 설정
                },
            },
        },
    });

    // 선 그래프 데이터셋을 차트에 추가합니다.
    mixedChart.data.datasets.push({
        label: 'Hlove',
        data: hlove,
        borderColor: 'rgba(255, 206, 86, 0.7)', // 선 색상
        backgroundColor: 'rgba(255, 206, 86, 0.2)', // 영역 색상
        type: 'line', // 그래프 유형을 선 그래프로 설정
    });

    // 변경된 내용을 반영하여 차트를 업데이트합니다.
    mixedChart.update();
});
