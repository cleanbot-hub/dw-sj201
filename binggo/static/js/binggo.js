function start() {
    var numbers = generateRandomNumbers(25, 1, 50);
    clearGrid();
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
    var achievedLineBingos = [];

    for (var i = 0; i < cells.length; i++) {
        if (index < numbers.length) {
            cells[i].innerText = numbers[index];
            index++;

            cells[i].addEventListener("click", function() {
                this.classList.toggle("cell-selected");

                var lineBingo = checkLineBingo();
                if (lineBingo && (achievedLineBingos.length < 2 || achievedLineBingos.indexOf(lineBingo) === -1)) {
                    achievedLineBingos.push(lineBingo);
                    alert("Bingo");
                }
            });
        }
    }

    function checkLineBingo() {
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
