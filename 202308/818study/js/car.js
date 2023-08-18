let data = []; // JSON 데이터를 저장할 변수

async function getData() {
  const response = await fetch("./car.json");
  const jsonData = await response.json();
  return jsonData;
}

async function main() {
  data = await getData();
  createFuelChart();
}

function createFuelChart() {
  const fuelTypes = [
    '수소', '전기', '하이브리드(LPG+전기)', '하이브리드(경유+전기)', '하이브리드(휘발유+전기)',
    '휘발유', '휘발유(무연)', '휘발유(유연)', '경유', '하이브리드(CNG+전기)'
  ];

  const fuelDataByYear = {}; // 연도별 연료 데이터를 저장할 객체

  for (const car of data) {
    const year = car.REG_YY; // 차량 등록 연도
    const fuelType = car.DTCONT; // 연료 타입
    const isRidingCar = car.RIDNG_ODR === '0'; // 주행 목적 여부

    if (car.PURPOS_DIV === '비사업용' && isRidingCar && fuelTypes.includes(fuelType)) {
      if (!fuelDataByYear[year]) {
        fuelDataByYear[year] = {};
      }

      if (!fuelDataByYear[year][fuelType]) {
        fuelDataByYear[year][fuelType] = 0;
      }

      fuelDataByYear[year][fuelType] += parseInt(car.VAN_CNT); // 차량 대수 누적
    }
  }

  const years = Object.keys(fuelDataByYear); // 연도 목록 추출
  const datasets = [];

  for (const fuelType of fuelTypes) {
    const dataPoints = years.map(year => fuelDataByYear[year][fuelType] || 0);
    datasets.push({
      label: fuelType,
      data: dataPoints,
      backgroundColor: getRandomColor(), // 무작위 색상 생성
      borderWidth: 1
    });
  }

  const ctx = document.getElementById('car').getContext('2d'); // 캔버스 요소 가져오기
  new Chart(ctx, {
    type: 'bar', // 막대 그래프로 변경
    data: {
      labels: years, // 연도별 레이블
      datasets: datasets
    },
    options: {
      responsive: true, // 반응형 설정
      maintainAspectRatio: false // 종횡비 유지 설정
    }
  });
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; // 무작위 색상 생성
  }
  return color;
}

main();
