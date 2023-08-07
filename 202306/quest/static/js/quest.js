function start() {
  var num = document.getElementById("num").value;
  var res = document.getElementById("result");
  var res1 = document.getElementById("result1");

  var glucoseLevel = parseInt(num);
  res.innerHTML = num;

  if (glucoseLevel >= 70 && glucoseLevel <= 100) {
    res.innerHTML += " - 공복 혈당 (정상)";
    if (glucoseLevel < 5.7) {
      res1.innerHTML = "정상 수치보다 5.7% 미만입니다.";
    } else {
      res1.innerHTML = "글리코프로틴 혈색소 (HbA1c) 수치: " + glucoseLevel + "%";
    }
  } else if (glucoseLevel >= 90 && glucoseLevel <= 140) {
    res.innerHTML += " - 식후 2시간 혈당 (정상)";
    if (glucoseLevel < 5.7) {
      res1.innerHTML = "정상 수치보다 5.7% 미만입니다.";
    } else {
      res1.innerHTML = "글리코프로틴 혈색소 (HbA1c) 수치: " + glucoseLevel + "%";
    }
  } else if (glucoseLevel < 70) {
    res.innerHTML += " - 저혈당 (저혈당)";
    if (glucoseLevel < 5.7) {
      res1.innerHTML = "정상 수치보다 5.7% 미만입니다.";
    } else {
      res1.innerHTML = "글리코프로틴 혈색소 (HbA1c) 수치: " + glucoseLevel + "%";
    }
  } else if (glucoseLevel > 140) {
    res.innerHTML += " - 고혈당 (고혈당)";
    if (glucoseLevel < 5.7) {
      res1.innerHTML = "정상 수치보다 5.7% 미만입니다.";
    } else {
      res1.innerHTML = "글리코프로틴 혈색소 (HbA1c) 수치: " + glucoseLevel + "%";
    }
  }
}
