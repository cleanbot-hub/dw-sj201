// window.addEventListener("load", start);

var selectedCells = []; // Array to track selected cells
var bingoCount = 0; // Count of achieved bingos

function start() {
  var numbers = generateRandomNumbers(25, 1, 50);
  clearGrid();
  createBingoGrid(numbers);
  bingoCount = 0; // Reset the bingo count
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
    cells[i].classList.remove("cell-selected");
  }
  selectedCells = []; // Reset selected cells array
  bingoCount = 0; // Reset the bingo count
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
          checkBingo();
        }
      });
    }
  }
}

// Check for bingos
function checkBingo() {
  var lineBingos = [];

  // Check rows, columns, vertical columns, and diagonals

  // ... (existing code for checking bingos)

  // Check for 5-cell bingo based on selected cells
  if (selectedCells.length >= 5) {
    // Check for horizontal bingos
    for (var row = 0; row < 5; row++) {
      var bingoCountInRow = 0;
      for (var col = 0; col < 5; col++) {
        var cellId = "cell" + (row * 5 + col + 1);
        if (selectedCells.includes(cellId)) {
          bingoCountInRow++;
        }
      }
      if (bingoCountInRow === 5) {
        lineBingos.push("Row " + (row + 1));
      }
    }

    // Check for vertical bingos
    for (var col = 0; col < 5; col++) {
      var bingoCountInCol = 0;
      for (var row = 0; row < 5; row++) {
        var cellId = "cell" + (row * 5 + col + 1);
        if (selectedCells.includes(cellId)) {
          bingoCountInCol++;
        }
      }
      if (bingoCountInCol === 5) {
        lineBingos.push("Column " + (col + 1));
      }
    }

    // Check for diagonal bingos
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
  }

  // Update bingo count and show alert
  if (lineBingos.length > bingoCount) {
    bingoCount = lineBingos.length;
    if (bingoCount < 5) {
      alert("Bingo! " + bingoCount + " bingo achieved!");
    } else {
      alert("Bingo! Game over! 5 bingos achieved!");
      clearGrid(); // Reset the grid when the game is over
    }
    return;
  }
}
