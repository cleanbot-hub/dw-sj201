function start() {
    // Generate an array of random unique numbers between 1 and 50
    var numbers = generateRandomNumbers(25, 1, 50); 

    // Clear the existing grid
    clearGrid();

    // Create a 5x5 bingo grid and populate it with the generated numbers
    createBingoGrid(numbers);

    // Update text content of the element with class "cell"
    var cells = document.getElementsByClassName("cell");
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = "pressed";
    }
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
        cells[i].classList.remove("cell-selected");
    }
}

function createBingoGrid(numbers) {
    var index = 0;
    var cells = document.getElementsByClassName("cell");
    for (var i = 0; i < cells.length; i++) {
        if (index < numbers.length) {
            cells[i].innerText = numbers[index];
            index++;
            cells[i].addEventListener("click", function() {
                this.classList.toggle("cell-selected");
                this.innerText = "selected";
            });
        }
    }
}


// Reset button functionality
var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function() {
    clearGrid();
});