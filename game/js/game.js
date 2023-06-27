const fruit = [
    '수박', '사과', '귤', '참외', '토마토',
    '키위', '감', '배', '포도', '무화과',
    '석류', '대추', '망고', '유자', '자두',
    '딸기', '복숭아', '바나나', '멜론', '라임',
    '구아바', '홍옥', '용과', '페피노', '체리',
    '레몬', '자몽', '살구', '파파야', '코코넛',
    '홍시', '복분자', '머루', '잣', '밤',
    '낑강', '한라봉', '두꾸', '산딸기', '뱀딸기',
    '앵두', '레드향', '신고', '람부탄', '두리안',
    '으름', '거봉', '여주', '만다린', '모과'
  ];
  
  const Brow = 5;
  const Bcol = 5;
  
  let game_state = false;
  let bingo = [];
  
  window.onload = function() {
    var board = document.querySelector("#board");
    var out = "";
    for (var i = 1; i <= Brow; i++) {
      out += "<tr>";
      for (var k = 1; k <= Bcol; k++) {
        out += "<td class='Gnum'></td>";
      }
      out += "</tr>";
    }
    board.innerHTML = out;
  
    var state = document.querySelector("#state_board");
    out = "";
    for (var i = 0; i <= 1; i++) {
      out += "<tr>";
      for (var k = 1; k <= 25; k++) {
        out += "<td class='stnum'>" + (fruit[i * 25 + k - 1]) + "</td>";
      }
      out += "</tr>";
    }
    state.innerHTML = out;
  }
  
  function init() {
    for (var i = 0; i < 25; i++) {
      var tmp = Math.floor(Math.random() * 50) + 1;
      if (bingo.indexOf(tmp) == -1) {
        bingo.push(tmp);
      } else {
        i--;
      }
    }
  
    var td = document.querySelectorAll(".Gnum");
    for (var i = 0; i < td.length; i++) {
      td[i].addEventListener("click", bingo_check);
      td[i].innerText = fruit[bingo[i] - 1];
    }
  
    var stat = document.querySelectorAll(".stnum");
    for (var i = 0; i < stat.length; i++) {
      stat[i].addEventListener("click", state_check);
    }
  }
  
  function start() {
    if (game_state) {
      alert("게임이 진행중입니다");
      return;
    }
    init();
    game_state = true;
  }
  
  function bingo_check() {
    var end = 0;
    var row = 0, col = 0;
    var click_num = 0;
    var td = document.querySelectorAll(".Gnum");
  
    var cross = [0, 0];
    for (var i = 0; i < Brow; i++) {
      for (var k = 0; k < Bcol; k++) {
        if (bingo[i * 5 + k] == 0) row++;
        if (bingo[k * 5 + i] == 0) col++;
      }
  
      if (bingo[i * 6] == 0) cross[0]++;
      if (bingo[i * 4 + 4] == 0) cross[1]++;
      if (cross[0] == 5) end++;
      if (cross[1] == 5) end++;
  
      if (row == 5) end++;
      if (col == 5) end++;
      row = 0;
      col = 0;
    }
  
    if (end == 5) {
      alert("빙고!!! 당신의 승리입니다");
      game_state = false;
      bingo = new Array();
  
      for (var i = 0; i < td.length; i++) {
        td[i].removeEventListener("click", bingo_check);
        td[i].innerText = fruit[bingo[i] - 1];
      }
  
      var stat = document.querySelectorAll(".stnum");
      for (var i = 0; i < stat.length; i++) {
        stat[i].removeEventListener("click", state_check);
      }
      return;
    }
  
    for (var i = 0; i < td.length; i++) {
      if (td[i] == this) {
        td[i].classList.add("Gnum_check");
        click_num = bingo[i];
        bingo[i] = 0;
        break;
      }
    }
  
    var stat = document.querySelectorAll(".stnum");
    stat[click_num - 1].classList.add("st_check");
  }
  
  function state_check() {
    if (this.classList.contains("st_check")) {
      this.classList.toggle("st_check");
    } else {
      this.classList.add("st_check");
    }
  }
  