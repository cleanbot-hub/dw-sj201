const 역 = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"
  ];
  
  const 운영 = 4;
  
  // 현재 위치 정보
  let 현재위치 = 0;
  
  // 역 클릭 시 이벤트 처리
  const 역요소들 = document.querySelectorAll('.station');
  for (let i = 0; i < 역요소들.length; i++) {
    const 역요소 = 역요소들[i];
    역요소.addEventListener('click', function () {
      const 역이름 = 역[i];
      const 정거장수 = 계산_정거장수(i);
      const 메시지 = `열차는 ${정거장수} 정거장 후에 도착합니다.`;
      document.getElementById('info').textContent = 메시지;
    });
  }
  
  // 위치 이동 함수
  function 이동() {
    // 현재 위치 표시
    const 역요소들 = document.querySelectorAll('.station');
    for (let i = 0; i < 역요소들.length; i++) {
      const 역요소 = 역요소들[i];
      if ((i >= 현재위치 && i < 현재위치 + 운영) || (i >= 현재위치 + 역.length - 운영 && i < 현재위치 + 역.length)) {
        역요소.classList.add('current-position');
      } else {
        역요소.classList.remove('current-position');
      }
    }
  
    // 열차 위치 표시
    const 열차요소들 = document.querySelectorAll('.train');
    for (let i = 0; i < 열차요소들.length; i++) {
      const 열차요소 = 열차요소들[i];
      const 열차위치 = (현재위치 + i) % 역.length;
      열차요소.style.left = `${열차위치 * 60}px`;
  
      // 열차 위치 메시지 표시
      const 메시지 = `열차 ${i + 1}은 현재 ${역[열차위치]}역에 위치해 있습니다.`;
      const infoTrainElement = document.getElementById(`info-train${i+1}`);
      if (infoTrainElement) {
        infoTrainElement.textContent = 메시지;
      }
    }
  
    // 다음 위치로 이동
    현재위치 = (현재위치 + 1) % 역.length;
  }
  
  // 초기 위치 설정
  이동();
  
  // 3초마다 위치 표시
  setInterval(이동, 3000);
  
  