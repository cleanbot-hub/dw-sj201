let data = []; // json data storage variable
let fire_stat = new Object();
let color = ["#FF6347", "#FFD700", "#7CFC00", "#008080", "#0000FF",
  "#BA55D3", "#D2691E", "#B0C4DE", "#FF4500", "#228B22", "#FFD700", "#7CFC00", "#008080"
];

// Function to fetch data
async function getData() {
  var temp = await fetch("./traffic.json").then((r) => r.json());
  return temp.body.items;
}

// Main function using Chart.js
$(async function () {
  data = await getData();
  var total = 0;
  var bike = 0;

  $.each(data, function (i, item) {
    total += Number(item.gutCo);
    bike += item.rlifAcdAsmCdNm === "오토바이사고" ? Number(item.gutCo) : 0;

    if (item.rsacGutFsttOgidNm in fire_stat) {
      fire_stat[item.rsacGutFsttOgidNm].출동건수 += item.gutCo;
      fire_stat[item.rsacGutFsttOgidNm].환자수 += item.trnfPcnt;
    } else {
      fire_stat[item.rsacGutFsttOgidNm] = {
        출동건수: Number(item.gutCo),
        환자수: Number(item.trnfPcnt),
      };
    }
  });

  var fireDepartments = Object.keys(fire_stat);
  var callCounts = fireDepartments.map((f) => fire_stat[f].출동건수);

  // Create the bar chart
  var barCtx = document.getElementById("barChart").getContext("2d");
  new Chart(barCtx, {
    type: "bar",
    data: {
      labels: fireDepartments,
      datasets: [
        {
          label: "출동건수",
          data: callCounts,
          backgroundColor: color,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Create the line chart for 이송환자수
  var patientCounts = fireDepartments.map((f) => fire_stat[f].환자수);
  var lineCtx = document.getElementById("lineChart").getContext("2d");
  new Chart(lineCtx, {
    type: "line",
    data: {
      labels: fireDepartments,
      datasets: [
        {
          label: "이송환자수",
          data: patientCounts,
          borderColor: "#FF4500",
          fill: false,
        },
      ],
    },
  });
});