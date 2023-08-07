let com_num = 0;
let win = 0, lose = 0, draw = 0;
let tern = false, play = false;

function start() {
  if (tern) {
    alert("유저턴을 기다리세요");
    return;
  }
  
  com_num = Math.floor(Math.random() * 6) + 1;
  let com = document.getElementById("com");
  com.src = "./image/dice" + com_num + ".png";
  tern = true;
}

function mydice() {
  if (!tern) {
    alert("당신의 턴이 아닙니다");
    return;
  }

  tern = false;
  let user_num = Math.floor(Math.random() * 6) + 1;
  let user = document.getElementById("user");
  user.src = "./image/dice" + user_num + ".png";

  let res = document.getElementById("result");
  if (com_num === user_num) {
    res.innerText = "무";
    draw++;
  } else if (com_num < user_num) {
    res.innerText = "승";
    win++;
  } else {
    res.innerText = "패";
    lose++;
  }

  document.getElementById("record").innerText = win + "승 " + lose + "패 " + draw + "무";
}
