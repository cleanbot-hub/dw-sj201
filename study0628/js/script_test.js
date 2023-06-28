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
let currentImgIndex = 0;

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
    pictureElements[i].style.border = 'none'; // Reset border style
    pictureElements[i].style.background = 'url(' + (path + image_name[image_position[i] % 20]) + ') no-repeat center';
    pictureElements[i].style.backgroundSize = 'contain';
    pictureElements[i].addEventListener('click', select_image);
  }

  currentImgIndex = 0; // Reset the current image index
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

  if (count === 16) {
    move_to_semifinals();
  } else if (count === 8) {
    move_to_finals();
  } else if (count === 4) {
    move_to_championship();
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

function move_to_semifinals() {
  // Hide the remaining Round of 16 images
  var pictureElements = document.getElementsByClassName('picture');
  for (var i = 0; i < pictureElements.length; i++) {
    if (!selectedImgs.includes(i)) {
      pictureElements[i].style.display = 'none';
    }
  }

  // Reset the selected images and count
  selectedImgs = [];
  count = 0;

  // Update the round number
  round = 2;

  // Show the Semifinals message
  var roundElement = document.getElementById('round');
  roundElement.innerText = 'Semifinals';
}

function move_to_finals() {
  // Hide the remaining Semifinals images
  var pictureElements = document.getElementsByClassName('picture');
  for (var i = 0; i < pictureElements.length; i++) {
    if (!selectedImgs.includes(i)) {
      pictureElements[i].style.display = 'none';
    }
  }

  // Reset the selected images and count
  selectedImgs = [];
  count = 0;

  // Update the round number
  round = 3;

  // Show the Finals message
  var roundElement = document.getElementById('round');
  roundElement.innerText = 'Finals';
}

function move_to_championship() {
  // Hide the remaining Finals images
  var pictureElements = document.getElementsByClassName('picture');
  for (var i = 0; i < pictureElements.length; i++) {
    if (!selectedImgs.includes(i)) {
      pictureElements[i].style.display = 'none';
    }
  }

  // Reset the selected images and count
  selectedImgs = [];
  count = 0;

  // Update the round number
  round = 4;

  // Show the Championship message
  var roundElement = document.getElementById('round');
  roundElement.innerText = 'Championship';
}
