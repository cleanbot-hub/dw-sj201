// window.addEventListener("load", start);

var selectedCells = []; // Array to track selected cells
var bingoCount = 0; // Count of achieved bingos

function start() {
  var numbers = generateRandomNumbers(25, 1, 50);
  clearGrid();
  createBingoGrid(numbers);
}

// Generate random numbers within a given range without duplicates
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

// Clear the grid
function clearGrid() {
  var cells = document.getElementsByClassName("cell");
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
}

// Create the bingo grid
function createBingoGrid(numbers) {
  var index = 0;
  var cells = document.getElementsByClassName("cell");

  for (var i = 0; i < cells.length; i++) {
    if (index < numbers.length) {
      cells[i].innerText = numbers[index];
      index++;

      cells[i].addEventListener("click", function () {
        if (!this.classList.contains("cell-selected")) {
          this.classList.add("cell-selected");
          selectedCells.push(this.id);
          checkBingo();
        } else {
          this.classList.remove("cell-selected");
          selectedCells = selectedCells.filter((cell) => cell !== this.id);
        }
      });
    }
  }
}

// Check for bingos
function checkBingo() {
  var lineBingos = [];

  // Check rows
  for (var row = 0; row < 5; row++) {
    var rowBingo = true;
    for (var col = 0; col < 5; col++) {
      var cellId = "cell" + (row * 5 + col + 1);
      if (!selectedCells.includes(cellId)) {
        rowBingo = false;
        break;
      }
    }
    if (rowBingo) {
      lineBingos.push("Row " + (row + 1));
    }
  }

  // Check columns
  for (var col = 0; col < 5; col++) {
    var colBingo = true;
    for (var row = 0; row < 5; row++) {
      var cellId = "cell" + (row * 5 + col + 1);
      if (!selectedCells.includes(cellId)) {
        colBingo = false;
        break;
      }
    }
    if (colBingo) {
      lineBingos.push("Column " + (col + 1));
    }
  }

  // Check vertical columns
  for (var col = 0; col < 5; col++) {
    var verticalBingo = true;
    for (var row = 0; row < 5; row++) {
      var cellId = "cell" + (col * 5 + row + 1);
      if (!selectedCells.includes(cellId)) {
        verticalBingo = false;
        break;
      }
    }
    if (verticalBingo) {
      lineBingos.push("Vertical Column " + (col + 1));
    }
  }

  // Check diagonals
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
    lineBingos.push("Diagonal 1");
  }
  if (diagonal2Bingo) {
    lineBingos.push("Diagonal 2");
  }

  // Update bingo count and show alert
  if (lineBingos.length > bingoCount) {
    bingoCount = lineBingos.length;
    if (bingoCount < 5) {
      alert("Bingo! " + bingoCount + " bingo achieved!");
    } else {
      alert("Bingo! Game over! 5 bingos achieved!");
    }
    return; // 종료
  }
}