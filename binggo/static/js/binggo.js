// window.addEventListener("load", start);

function start() {
    var numbers = generateRandomNumbers(25, 1, 50);
    clearGrid();
    createBingoGrid(numbers);
  }
  
  // count 개수만큼 min부터 max까지의 범위에서 중복되지 않는 랜덤 숫자 생성
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
  
  // 게임 그리드 초기화
  function clearGrid() {
    var cells = document.getElementsByClassName("cell");
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerText = "";
    }
  }
  
  // 빙고 그리드 생성
  function createBingoGrid(numbers) {
    var index = 0;
    var cells = document.getElementsByClassName("cell");
    var selectedCount = 0; // 선택된 셀의 개수를 추적하는 변수
  
    for (var i = 0; i < cells.length; i++) {
      if (index < numbers.length) {
        cells[i].innerText = numbers[index];
        index++;
  
        cells[i].addEventListener("click", function () {
          this.classList.toggle("cell-selected");
          if (this.classList.contains("cell-selected")) {
            selectedCount++;
          } else {
            selectedCount--;
          }
  
          if (selectedCount >= 5) {
            var lineBingos = checkLineBingo();
            if (lineBingos.length > 0) {
              // 빙고가 발생했을 때 "Bingo!" 알림
              alert("Bingo!");
              selectedCount = 0; // 선택된 셀 개수 초기화
            }
          }
        });
      }
    }
  
    // 빙고 줄 체크
    function checkLineBingo() {
      var lineBingos = [];
  
      // 가로 줄 체크
      for (var row = 0; row < 5; row++) {
        var rowBingo = true;
        for (var col = 0; col < 5; col++) {
          var cellId = "cell" + (row * 5 + col + 1);
          var cell = document.getElementById(cellId);
          if (!cell.classList.contains("cell-selected")) {
            rowBingo = false;
            break;
          }
        }
        if (rowBingo) {
          lineBingos.push("Row " + (row + 1));
        }
      }
  
      // 세로 줄 체크
      for (var col = 0; col < 5; col++) {
        var colBingo = true;
        for (var row = 0; row < 5; row++) {
          var cellId = "cell" + (row * 5 + col + 1);
          var cell = document.getElementById(cellId);
          if (!cell.classList.contains("cell-selected")) {
            colBingo = false;
            break;
          }
        }
        if (colBingo) {
          lineBingos.push("Column " + (col + 1));
        }
      }
  
      // 세로 열 체크
      for (var col = 0; col < 5; col++) {
        var verticalBingo = true;
        for (var row = 0; row < 5; row++) {
          var cellId = "cell" + (col * 5 + row + 1);
          var cell = document.getElementById(cellId);
          if (!cell.classList.contains("cell-selected")) {
            verticalBingo = false;
            break;
          }
        }
        if (verticalBingo) {
          lineBingos.push("Vertical Column " + (col + 1));
        }
      }
  
      // 대각선 줄 체크
      var diagonal1Bingo = true;
      var diagonal2Bingo = true;
      for (var i = 0; i < 5; i++) {
        var cellId1 = "cell" + (i * 5 + i + 1);
        var cell1 = document.getElementById(cellId1);
        var cellId2 = "cell" + (i * 5 + (4 - i) + 1);
        var cell2 = document.getElementById(cellId2);
        if (!cell1.classList.contains("cell-selected")) {
          diagonal1Bingo = false;
        }
        if (!cell2.classList.contains("cell-selected")) {
          diagonal2Bingo = false;
        }
      }
      if (diagonal1Bingo) {
        lineBingos.push("Diagonal 1");
      }
      if (diagonal2Bingo) {
        lineBingos.push("Diagonal 2");
      }
  
      return lineBingos;
    }
  }
  