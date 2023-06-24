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
    for (var i = 0; i < cells.length; i++) {
        if (index < numbers.length) {
            cells[i].innerText = numbers[index];
            index++;
        }
    }
}
