function start() {
    // Generate an array of random unique numbers between 1 and 50
    var numbers = generateRandomNumbers(25, 1, 50);

    // Clear the existing grid
    clearGrid();

    // Create a 5x5 bingo grid and populate it with the generated numbers
    createBingoGrid(numbers);
}

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

function clearGrid() {
    var cells = document.getElementsByClassName("cell");
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
    }
}

function createBingoGrid(numbers) {
    var index = 0;
    var cells = document.getElementsByClassName("cell");

    // Array to keep track of selected cells
    var selectedCells = [];

    // Array to keep track of achieved line bingos
    var achievedLineBingos = [];

    for (var i = 0; i < cells.length; i++) {
        if (index < numbers.length) {
            cells[i].innerText = numbers[index];
            index++;

            // Add click event listener to each cell
            cells[i].addEventListener("click", function() {
                this.classList.toggle("cell-selected");

                // Check if a line bingo has been achieved
                var lineBingo = checkLineBingo();
                if (lineBingo && achievedLineBingos.indexOf(lineBingo) === -1) {
                    achievedLineBingos.push(lineBingo);
                    alert("Binggo");
                }
            });
        }
    }

    function checkLineBingo() {
        // Check rows for a line bingo
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
                return "Row " + (row + 1);
            }
        }

        // Check columns for a line bingo
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
                return "Column " + (col + 1);
            }
        }

        // Check diagonals for a line bingo
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
            return "Diagonal 1";
        }
        if (diagonal2Bingo) {
            return "Diagonal 2";
        }

        return null;
    }
}

