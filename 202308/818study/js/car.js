let data = new Object(); // 연료 유형별 데이터를 저장할 객체

const types = ["하이브리드", "수소", "경유", "휘발유", "전기"]; // 연료 유형 목록

async function getData() {
  var temp = await fetch("./car.json").then((res) => res.json()); // JSON 데이터 가져오기
  console.log(temp);
  refine(temp); // 데이터 정제 함수 호출
}

$(async function () {
  await getData(); // 데이터 가져오기 및 정제 함수 호출
    const ctx =$("#car")[0]; 

    new Chart(ctx,{
        type:"line",
        data:{
            datasets:[
                {
                    
                }
            ]
        },
    })

});

function refine(temp) {
  // JSON 데이터 정제 함수
  $.each(temp, function (i, c) {
    var type = "";
    // 연료 유형이 types 배열에 포함되어 있는지 확인
    if ((type = include(c.DTCONT)) == "" || c.PURPOS_DIV === "사업용") return true;
    if (!(type in data)) data[type] = new Object(); // 연료 유형이 객체에 없으면 추가
    if (!(c.REG_YY in data[type]))
      data[type][c.REG_YY] = Number(c.RIDNG_ODR); // 연도가 객체에 없으면 추가
    else data[type][c.REG_YY] += Number(c.RIDNG_ODR); // 이미 있는 연도의 데이터 누적
  });
  console.log(data); // 정제된 데이터 출력
}

function include(kind) {
  // 연료 유형이 types 배열에 포함되는지 확인하는 함수
  for (var i in types) {
    if (kind.indexOf(types[i]) > -1) return types[i]; // 포함되면 해당 연료 유형 반환
  }
  return ""; // 포함되지 않으면 빈 문자열 반환
}
