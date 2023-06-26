// window.addEventListener("load", start);

var selectedCells = []; // 선택된 셀을 추적하기 위한 배열
var bingoCount = 0; // 달성한 빙고의 개수
var gameStarted = false; // 게임이 시작되었는지를 나타내는 변수

function start() {
  var numbers = generateRandomNumbers(25, 1, 50);
  clearGrid();
  createBingoGrid(numbers);
  bingoCount = 0; // 빙고 개수 초기화
  gameStarted = true; // gameStarted를 true로 설정
}

// 주어진 범위 내에서 중복되지 않는 무작위 숫자 생성
function generateRandomNumbers(count, min, max) {
  var numbers = [];
  while (numbers.length < count) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (numbers.indexOf(randomNumber) === -1) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

// 그리드 초기화
function clearGrid() {
  var cells = document.getElementsByClassName("cell");
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].classList.remove("cell-selected");
  }
  selectedCells = []; // 선택된 셀 배열 초기화
  bingoCount = 0; // 빙고 개수 초기화
  gameStarted = false; // gameStarted를 false로 설정
}

// 빙고 그리드 생성
function createBingoGrid(numbers) {
  var index = 0;
  var cells = document.getElementsByClassName("cell");

  for (var i = 0; i < cells.length; i++) {
    if (index < numbers.length) {
      cells[i].innerText = numbers[index];
      index++;

      cells[i].addEventListener("click", function () {
        if (gameStarted) { // 게임이 시작되었는지 확인
          if (!this.classList.contains("cell-selected")) {
            this.classList.add("cell-selected");
            selectedCells.push(this.id);
            checkBingo();
          } else {
            this.classList.remove("cell-selected");
            selectedCells = selectedCells.filter((cell) => cell !== this.id);
            checkBingo();
          }
        } else {
          alert("먼저 게임을 시작해주세요!"); // 게임이 시작되지 않았을 때 알림 표시
        }
      });
    }
  }
}

// 빙고 확인
function checkBingo() {
  var lineBingos = [];

  // 행, 열, 대각선에 대한 빙고 확인

  // ... (빙고 확인을 위한 기존 코드)

  // 선택된 셀을 기반으로 5칸 빙고 확인
  if (selectedCells.length >= 5) {
    // 가로 빙고 확인
    for (var row = 0; row < 5; row++) {
      var bingoCountInRow = 0;
      for (var col = 0; col < 5; col++) {
        var cellId = "cell" + (row * 5 + col + 1);
        if (selectedCells.includes(cellId)) {
          bingoCountInRow++;
        }
      }
      if (bingoCountInRow === 5) {
        lineBingos.push("행 " + (row + 1));
      }
    }

    // 세로 빙고 확인
    for (var col = 0; col < 5; col++) {
      var bingoCountInCol = 0;
      for (var row = 0; row < 5; row++) {
        var cellId = "cell" + (row * 5 + col + 1);
        if (selectedCells.includes(cellId)) {
          bingoCountInCol++;
        }
      }
      if (bingoCountInCol === 5) {
        lineBingos.push("열 " + (col + 1));
      }
    }

    // 대각선 빙고 확인
    var diagonal1Bingo = true;
    var diagonal2Bingo = true;
    for (var i = 0; i < 5; i++) {
      var cellId1 = "cell" + (i * 5 + i + 1);
      var cellId2 = "cell" + (i * 5 + (4 - i) + 1);
      if (!selectedCells.includes(cellId1)) {
        diagonal1Bingo = false;
      }
      if (!selectedCells.includes(cellId2)) {
        diagonal2Bingo = false;
      }
    }
    if (diagonal1Bingo) {
      lineBingos.push("대각선 1");
    }
    if (diagonal2Bingo) {
      lineBingos.push("대각선 2");
    }
  }

  // 빙고 개수 업데이트 및 알림 표시
  if (lineBingos.length > bingoCount) {
    bingoCount = lineBingos.length;
    if (bingoCount < 5) {
      alert("빙고! " + bingoCount + "개의 빙고가 달성되었습니다!");
    } else {
      alert("빙고! 게임 종료! 5개의 빙고가 달성되었습니다!");
      clearGrid(); // 게임이 종료되면 그리드를 초기화
    }
    return;
  }
}
