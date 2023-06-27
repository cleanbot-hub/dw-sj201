const fruit = [
  '말티즈', '푸들', '포메라니안', '믹스견', '치와와',
  '시추', '골든리트리버', '진돗개', '요크셔테리어', '비글',
  '월시코기', '닥스훈트', '슈나우저', '보더콜리', '프렌치불독',
  '퍼그', '파피용', '시바견', '비숑프리제', '스코티쉬테리어'
];

let game_state = false;
let path = './image/';
let image_name = ['beagle.png', 'bichonfrize.png', 'bordercollie.png', 'chihuahua.png', 'dachshund.png',
  'frenchbulldog.png', 'goldenretriever.png', 'jindo.png', 'maltese.png', 'mixdog.png', 'papillon.png', 'pomeranian.png', 'poodle.png', 'pug.png', 'schnauzer.png', 'scottishterrier.png',
  'shibaInu.png', 'shihtzu.png', 'welshcorgi.png', 'yorkshireterrier.png'
];
let image_position = [];
let isStart = false;
let round = 1;
let count = 0;
let selectedImgs = [];

window.onload = function () {
  var start_bt = document.getElementById('start');
  start_bt.addEventListener('click', game_start);
  var countElement = document.getElementById('count');
  countElement.innerText = count;
}

function image_init() {
  // Clear the image_position array
  image_position = [];

  // Randomly select 20 unique image positions
  while (image_position.length < 20) {
    var randomPosition = Math.floor(Math.random() * 20);
    if (!image_position.includes(randomPosition)) {
      image_position.push(randomPosition);
    }
  }

  // Update the background images for the picture elements
  var pictureElements = document.getElementsByClassName('picture');
  for (var i = 0; i < pictureElements.length; i++) {
    pictureElements[i].style.background = 'url(' + (path + image_name[image_position[i] % 20]) + ') no-repeat center';
    pictureElements[i].style.backgroundSize = 'contain';
  }
}

function game_start() {
  if (isStart) {
    return;
  }
  image_init();
  isStart = true;
}

function select_image() {
  if (!isStart) {
    return;
  }
  var pictureElement = this;
  var index = getIndex(pictureElement);

  if (selectedImgs.includes(index)) {
    return;
  }

  pictureElement.style.border = '2px solid red';
  selectedImgs.push(index);

  count++;
  var countElement = document.getElementById('count');
  countElement.innerText = count;

  if (count === 30) {
    game_over();
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

function game_over() {
  isStart = false;

  // Display the selected images and their names
  var stateBoard = document.getElementById('state_board');
  stateBoard.innerHTML = '';

  for (var i = 0; i < selectedImgs.length; i++) {
    var rowIndex = Math.floor(i / 5);
    var columnIndex = i % 5;

    var name = fruit[image_position[selectedImgs[i]] % 20];

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
