// Initial state
let currentStation = 1;
let currentTrain = 1;

// Display train info when a station is clicked
function showTrainInfo(station) {
    const stationNumber = parseInt(station.innerText);
    const stationsAway = Math.abs(currentStation - stationNumber);
    const info = `The nearest train is ${stationsAway} stations away.`;
    alert(info);
}

// Update train position every 3 seconds
setInterval(updateTrainPosition, 3000);

// Move train to the next station every 4 seconds
setInterval(moveTrain, 4000);

// Function to update the train position
function updateTrainPosition() {
    const trainElement = document.getElementById(`train${currentTrain}`);
    const stationElements = document.getElementsByClassName('station');

    // Reset train position
    trainElement.style.top = '0';
    trainElement.style.left = '0';

    // Find the current station element
    const currentStationElement = Array.from(stationElements).find(element => parseInt(element.innerText) === currentStation);

    // Set train position based on the current station
    trainElement.style.top = currentStationElement.offsetTop + 'px';
    trainElement.style.left = currentStationElement.offsetLeft + 'px';
}

// Function to move the train to the next station
function moveTrain() {
    const stationElements = document.getElementsByClassName('station');
    const numStations = stationElements.length;

    // Increment the current station and wrap around if necessary
    currentStation = (currentStation % numStations) + 1;

    // Increment the current train and wrap around if necessary
    currentTrain = (currentTrain % 4) + 1;

    // Update the train position
    updateTrainPosition();
}