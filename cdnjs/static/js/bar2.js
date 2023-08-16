// HTML에서 id가 "acc"인 요소를 가져와서 ctx 변수에 할당합니다.
const ctx = $("#acc")[0];

// 각 학생의 이름, 시험 점수, 질문 점수, 태도 점수를 배열로 정의합니다.
const name = ["김승겸", "안태균", "송은선", "이상준", "김선향", "신상수"];
const exam = [3, 2, 5, 1, 6, 4];
const question = [5, 1, 2, 7, 2, 3];
const attitude = [6, 5, 6, 4, 3, 2];

// Chart.js를 사용하여 바차트를 생성하고 데이터를 표시합니다.
new Chart(ctx, {
    type: "bar", // 바차트 타입을 지정합니다.
    plugins: [ChartDataLabels], // 데이터 라벨 플러그인을 사용합니다.
    data: {
        labels: name, // X축 레이블로 학생 이름을 사용합니다.
        datasets: [
            {
                label: "시험", // 데이터셋의 라벨을 지정합니다.
                data: exam, // 시험 점수 데이터를 사용합니다.
                backgroundColor: "orange", // 막대 색상을 지정합니다.
                datalabels: { align: "end", anchor: "start" } // 데이터 라벨의 위치를 조정합니다.
            },

            {
                label: "질문", // 데이터셋의 라벨을 지정합니다.
                data: question, // 시험 점수 데이터를 사용합니다.
                backgroundColor: "tomato", // 막대 색상을 지정합니다.
                datalabels: { align: "center", anchor: "center" } // 데이터 라벨의 위치를 조정합니다.
            },


            {
                label: "태도", // 데이터셋의 라벨을 지정합니다.
                data: attitude, // 시험 점수 데이터를 사용합니다.
                backgroundColor: "sienna", // 막대 색상을 지정합니다.
                datalabels: { align: "end", anchor: "center" } // 데이터 라벨의 위치를 조정합니다.
            },
            


        ],
    },
    options: {
        plugins: {
            datalabels: {
                formatter: function (v, c) {
                    return v+"개"; // 데이터 라벨의 내용을 표시합니다.
                },
                color: "white" // 데이터 라벨 텍스트 색상을 지정합니다.
            },
            title: {
                display: true, // 차트 제목을 표시합니다.
                text: "커피 누적" // 차트 제목을 지정합니다.
            }
        },
        scales:{
            x:{stacked:true},
            y:{stacked:true}
        }
    }
});
