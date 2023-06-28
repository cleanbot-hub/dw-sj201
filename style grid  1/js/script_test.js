const fruit = [
  '말티즈', '푸들', '포메라니안', '믹스견', '치와와',
  '시추', '골든리트리버', '진돗개', '요크셔테리어', '비글',
  '월시코기', '닥스훈트', '슈나우저', '보더콜리', '프렌치불독',
  '퍼그', '파피용', '시바견', '비숑프리제', '스코티쉬테리어'
];

let isStart = false;
let imagePosition = [];
let path = './image/';
let imageNames = ['beagle.png', 'bichonfrize.png', 'bordercollie.png', 'chihuahua.png', 'dachshund.png',
  'frenchbulldog.png', 'goldenretriever.png', 'jindo.png', 'maltese.png', 'mixdog.png', 'papillon.png', 'pomeranian.png', 'poodle.png', 'pug.png', 'schnauzer.png', 'scottishterrier.png',
  'shibaInu.png', 'shihtzu.png', 'welshcorgi.png', 'yorkshireterrier.png'
];
let count = 0;
let selectedImages = [];

window.onload = function() {
  var startButton = document.getElementById('start');
  startButton.addEventListener('click', gameStart);
  var countElement = document.getElementById('count');
  countElement.innerText = count;
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

  count++;
  var countElement = document.getElementById('count');
  countElement.innerText = count;

  if (count === 30) {
    gameEnd();
  } else if (selectedImages.length === 1) {
    setTimeout(nextStage, 1000);
  }
}

function nextStage() {
  selectedImages = [];
  var pictureElements = document.getElementsByClassName('picture');
  for (var i = 0; i < pictureElements.length; i++) {
    pictureElements[i].style.border = 'none';
  }
  imageInit();
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
  var stateBoard = document.getElementById('state_board');
  stateBoard.innerHTML = '';

  for (var i = 0; i < selectedImages.length; i++) {
    var rowIndex = Math.floor(i / 5);
    var columnIndex = i % 5;

    var name = fruit[imagePosition[selectedImages[i]]];

    if (columnIndex === 0) {
      var rowElement = document.createElement('tr');
      stateBoard.appendChild(rowElement);
    }

    var cellElement = document.createElement('td');
    cellElement.innerText = name;
    rowElement.appendChild(cellElement);
  }

  // Show game over message
  var loadingElement = document.getElementById('loading');
  loadingElement.style.display = 'none';

  var stateElement = document.getElementById('state');
  stateElement.style.display = 'block';
}
