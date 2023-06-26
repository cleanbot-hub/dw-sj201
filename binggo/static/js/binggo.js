var selectedCells = []; // 선택된 셀을 추적하기 위한 배열
var bingoCount = 0; // 달성한 빙고의 개수
var gameStarted = false; // 게임이 시작되었는지를 나타내는 변수
var computerNumbers = []; // 컴퓨터가 선택 가능한 숫자 목록

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

// 게임 시작 시 초기화 및 컴퓨터 숫자 선택
function start() {
  var userNumbers = generateRandomNumbers(25, 1, 50);
  computerNumbers = generateRandomNumbers(25, 1, 50);

  clearGrid();
  createBingoGrid(userNumbers, computerNumbers);
  bingoCount = 0;
  gameStarted = true;

  // 컴퓨터가 숫자 선택
  setTimeout(computerSelectNumber, 1000);
}

var userTurn = true;

// 사용자가 숫자 선택 시 컴퓨터가 숫자 선택
function selectNumber(cellId) {
  if (gameStarted && userTurn) {
    var selectedCell = document.getElementById(cellId);
    if (!selectedCell.classList.contains("cell-selected")) {
      selectedCell.classList.add("cell-selected");
      selectedCells.push(cellId);
      checkBingo();

      // 컴퓨터가 숫자 선택
      userTurn = false;
      setTimeout(computerSelectNumber, 1000);
    }
  } else {
    alert("먼저 게임을 시작해주세요!");
  }
}

// 컴퓨터가 숫자를 자동으로 선택하는 함수
function computerSelectNumber() {
  if (!userTurn) {
    var availableNumbers = computerNumbers.filter(function (number) {
      var cellId = "comp-cell" + number;
      var cell = document.getElementById(cellId);
      return (
        cell &&
        !cell.classList.contains("cell-selected") &&
        !cell.classList.contains("user-grid") &&
        !cell.classList.contains("computer-cell")
      );
    });

    if (availableNumbers.length > 0) {
      var randomIndex = Math.floor(Math.random() * availableNumbers.length);
      var selectedNumber = availableNumbers[randomIndex];
      var selectedCellId = "comp-cell" + selectedNumber;
      var selectedCell = document.getElementById(selectedCellId);

      selectedCell.classList.add("cell-selected");
      selectedCell.classList.add("computer-grid");
      selectedCells.push(selectedCellId);
      checkBingo();

      selectedCell.innerText = selectedNumber;

      alert("컴퓨터가 숫자 " + selectedNumber + "를 선택했습니다.");
    }

    userTurn = true;
  }
}

// 빙고 확인
function checkBingo() {
  // 빙고 확인 로직은 이전과 동일하게 작성됩니다.
  // ...

  // 빙고 개수 업데이트 및 알림 표시
  if (lineBingos.length > bingoCount) {
    bingoCount = lineBingos.length;
    if (bingoCount < 5) {
      alert("빙고! " + bingoCount + "개의 빙고가 달성되었습니다!");
    } else {
      alert("빙고! 게임 종료! 5개의 빙고가 달성되었습니다!");
      clearGrid();
    }
    return;
  }
}

// 그리드 초기화 및 빙고 그리드 생성 함수는 이전과 동일합니다.
// ...

// 게임 시작 시 초기화
start();
