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
  computerNumbers = generateRandomNumbers(25, 1, 50); // 'var' 키워드 제거
  
  clearGrid();
  createBingoGrid(userNumbers, computerNumbers);
  bingoCount = 0;
  gameStarted = true;
  
  // 컴퓨터가 숫자 선택
  computerSelectNumber();
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
      userTurn = false; // 사용자 턴 종료
      setTimeout(function() {
        computerSelectNumber();
        alert("컴퓨터의 턴입니다.");
      }, 1000);
    }      
  } else {
    alert("먼저 게임을 시작해주세요!");
  }
}

// 컴퓨터가 숫자를 자동으로 선택하는 함수
// 컴퓨터가 숫자를 자동으로 선택하는 함수
// 컴퓨터가 숫자를 자동으로 선택하는 함수

// 컴퓨터가 숫자를 자동으로 선택하는 함수
function computerSelectNumber() {
  if (!userTurn) {
    var availableNumbers = computerNumbers.filter(function (number) {
      var cellId = "comp-cell" + number;
      var cell = document.getElementById(cellId);
      return cell && !cell.classList.contains("cell-selected") && !cell.classList.contains("user-grid") && !cell.classList.contains("computer-cell");
    });

    if (availableNumbers.length > 0) {
      var randomIndex = Math.floor(Math.random() * availableNumbers.length);
      var selectedNumber = availableNumbers[randomIndex];
      var selectedCellId = "comp-cell" + selectedNumber;
      var selectedCell = document.getElementById(selectedCellId);

      selectedCell.classList.add("cell-selected");
      selectedCell.classList.add("computer-selected"); // 컴퓨터 선택을 나타내는 클래스 추가
      selectedCells.push(selectedCellId);
      checkBingo();

      selectedCell.innerText = selectedNumber; // 숫자 표시

      alert("컴퓨터가 숫자 " + selectedNumber + "를 선택했습니다."); // 컴퓨터 턴 알림 및 선택한 숫자 알림 추가
    }

    userTurn = true; // 컴퓨터 턴 종료, 사용자 턴으로 변경
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

// 그리드 초기화
function clearGrid() {
  var userCells = document.querySelectorAll(".user-grid .cell");
  var computerCells = document.querySelectorAll(".computer-grid .cell");
  
  for (var i = 0; i < userCells.length; i++) {
      userCells[i].innerText = "";
      userCells[i].classList.remove("cell-selected");
  }
  
  for (var i = 0; i < computerCells.length; i++) {
      computerCells[i].innerText = "";
      computerCells[i].classList.remove("cell-selected");
  }
  
  selectedCells = []; // 선택된 셀 배열 초기화
  bingoCount = 0; // 빙고 개수 초기화
  gameStarted = false; // gameStarted를 false로 설정
}

// 빙고 그리드 생성
// 빙고 그리드 생성
function createBingoGrid(userNumbers, computerNumbers) {
  var userIndex = 0;
  var computerIndex = 0;
  var userCells = document.querySelectorAll(".user-grid .cell");
  var computerCells = document.querySelectorAll(".computer-grid .cell");

  for (var i = 0; i < userCells.length; i++) {
    if (userIndex < userNumbers.length) {
      userCells[i].innerText = userNumbers[userIndex];
      userIndex++;
    }
  }

  for (var i = 0; i < computerCells.length; i++) {
    if (computerIndex < computerNumbers.length) {
      computerCells[i].innerText = computerNumbers[computerIndex];
      computerIndex++;
    }
  }
}


// 게임 시작 시 초기화
start();
