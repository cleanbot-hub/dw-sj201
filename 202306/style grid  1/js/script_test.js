const fruit = [
  '말티즈', '푸들', '포메라니안', '믹스견', '치와와',
  '시추', '골든리트리버', '진돗개', '요크셔테리어', '비글',
  '월시코기', '닥스훈트', '슈나우저', '보더콜리', '프렌치불독',
  '퍼그', '파피용', '시바견', '비숑프리제', '스코티쉬테리어'
];

let isStart = false;
let imagePosition = [];
let path = './image/';
let imageNames = ['1.png', '2.png', '3.png', '4.png', '5.png',
  '6.png', 'goldenretriever.png', 'jindo.png', 'maltese.png', 'mixdog.png', 'papillon.png', 'pomeranian.png', 'poodle.png', 'pug.png', 'schnauzer.png', 'scottishterrier.png',
  'shibaInu.png', 'shihtzu.png', 'welshcorgi.png', 'yorkshireterrier.png'
];
let round = 1;
let selectedImages = [];

window.onload = function() {
  var startButton = document.getElementById('start');
  startButton.addEventListener('click', gameStart);
  var countElement = document.getElementById('count');
  countElement.innerText = '현재 강: ' + round;
}

function imageInit() {
  // Clear the imagePosition array
  imagePosition.length = 0;

  // Randomly select 20 unique image positions
  while (imagePosition.length < 20) {
    var randomPosition = Math.floor(Math.random() * 20);
    if (!imagePosition.includes(randomPosition)) {
      imagePosition.push(randomPosition);
    }
  }

  // Update the background images for the picture elements
  var pictureElements = document.getElementsByClassName('picture');
  for (var i = 0; i < pictureElements.length; i++) {
    pictureElements[i].style.background = 'url(' + (path + imageNames[imagePosition[i]]) + ') no-repeat center';
    pictureElements[i].style.backgroundSize = 'contain';
    pictureElements[i].addEventListener('click', selectImage);
  }
}

function gameStart() {
  if (isStart) {
    return;
  }
  imageInit();
  isStart = true;
}

function selectImage() {
  if (!isStart) {
    return;
  }
  var pictureElement = this;
  var index = getIndex(pictureElement);

  if (selectedImages.includes(index)) {
    return;
  }

  pictureElement.style.border = '2px solid red';
  selectedImages.push(index);

  if (selectedImages.length === 1) {
    round++;
    var countElement = document.getElementById('count');
    countElement.innerText = '현재 강: ' + round;
    setTimeout(nextRound, 1000);
  }
}

function nextRound() {
  selectedImages = [];
  var pictureElements = document.getElementsByClassName('picture');
  for (var i = 0; i < pictureElements.length; i++) {
    pictureElements[i].style.border = 'none';
  }
  imageInit();

  if (round === 16) {
    gameEnd();
  }
}

function getIndex(pictureElement) {
  var pictureElements = document.getElementsByClassName('picture');
  for (var i = 0; i < pictureElements.length; i++) {
    if (pictureElements[i] === pictureElement) {
      return i;
    }
  }
  return -1;
}

function gameEnd() {
  isStart = false;

  // Display the selected images and their names
  var stateTable = document.getElementById('state_table');
  stateTable.innerHTML = '';

  var totalSelected = selectedImages.length;
  var totalElement = document.createElement('p');
  totalElement.innerText = 'Total Selected Images: ' + totalSelected;
  stateTable.parentNode.insertBefore(totalElement, stateTable.nextSibling);

  for (var i = 0; i < totalSelected; i++) {
    var rowIndex = Math.floor(i / 2);
    var columnIndex = i % 2;

    var name = fruit[imagePosition[selectedImages[i]]];

    if (columnIndex === 0) {
      var rowElement = document.createElement('tr');
      stateTable.appendChild(rowElement);
    }

    var stageCellElement = document.createElement('td');
    stageCellElement.innerText = 'Stage ' + (rowIndex + 1);
    rowElement.appendChild(stageCellElement);

    var imageCellElement = document.createElement('td');
    imageCellElement.innerText = name;
    rowElement.appendChild(imageCellElement);
  }

  // Show game over message
  var loadingElement = document.getElementById('loading');
  loadingElement.style.display = 'none';

  var stateElement = document.getElementById('state');
  stateElement.style.display = 'block';

  // Display the last selected image
  var lastSelectedImage = document.getElementById('last_selected_image');
  lastSelectedImage.style.background = 'url(' + (path + imageNames[imagePosition[selectedImages[totalSelected - 1]]]) + ') no-repeat center';
  lastSelectedImage.style.backgroundSize = 'contain';
}

// 추가: 게임이 종료되면 초기화 함수 호출
function resetGame() {
  round = 1;
  selectedImages = [];
  var countElement = document.getElementById('count');
  countElement.innerText = '현재 강: ' + round;
  var stateTable = document.getElementById('state_table');
  stateTable.innerHTML = '';
  var lastSelectedImage = document.getElementById('last_selected_image');
  lastSelectedImage.style.background = '';
  var loadingElement = document.getElementById('loading');
  loadingElement.style.display = 'block';
  var stateElement = document.getElementById('state');
  stateElement.style.display = 'none';
}
