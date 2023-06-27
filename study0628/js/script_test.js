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
let count = 0;
let end_count = 0;
let isSame = [];
let selectImg = [];

window.onload = function () {
  var start_bt = document.getElementById('start');
  start_bt.addEventListener('click', game_start);
  var count = document.getElementById('count');
  count.innerText = 0;
  
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
  var img = document.getElementsByClassName('picture');
  for (var i = 0; i < img.length; i++) {
    img[i].style.background = 'url(' + (path + image_name[image_position[i] % 20]) + ') no-repeat center';
    img[i].style.backgroundSize = 'contain';
  }
}

function game_start() {
  if (isStart) {
    // return;
  }
  image_init();
  isStart = true;
}

function compare_img() {
  // Function body
}

function search_Element(obj) {
  // Function body
}
