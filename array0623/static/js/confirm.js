window.onload = function () {

var num645 = document.getElementsByClassName("num_645");
    for(var i=0; i<num645.length; i++){
        num645[i].addEventListener("keyup",function(e){ // 입력한 값 keyup 
            
            if(e.keyCode<48 || e.keyCode >57 && e.keyCode<97 || e.keyCode>105){
                return;
            } // 숫자카와 키패드 숫자 제외한 모든 키를 무시하기 위한 if 문 
            
            
            var n = parseInt(this.value);
            if(!(1<=n && n<=45)){
                alert("1~45 숫자만 입력 하세요 ");
                this.value='';
                this.focus();
            }
    });


}
    


    // 여기에 input 에 키보드로 입력 이벤트를 등록 시키기 
    // 키보드 이벤트는 press 가 일반적이기는 한데 .. 
    // 모든 input에 이벤트 등록 해야 함 


    var drwNo = document.querySelector("#drwNo");
    var btnDefault = document.querySelector("#btnDefault");
    var btnSearch = document.querySelector("#btnSearch");
    
    btnDefault.addEventListener("click", data_default);
    btnSearch.addEventListener("click", data_search);
    
    var file = document.querySelector("#lotto");
    file.addEventListener("input", function (e) {
      let target = e.target;
      let files = target.files;
      
      let reader = new FileReader();
      reader.addEventListener("load", function () {
        var str = reader.result;
        var temp = str.split("\n");
        
        for (var i in temp) {
          lotto.push(temp[i].split("\t"));
        }
      });
      
      reader.readAsText(files[0]);
    });
    
    var opt = "";
    for (var i = 1073; i > 1; i--) {
      opt += "<option>" + i + "</option>";
    }
    drwNo.innerHTML = opt;
    drwNo.addEventListener("change", select_count);
  };
  
  
  let sel_count = 0;
  
  function select_count() {
    sel_count = this.selectedIndex;
  }
  
  function data_default() {
    // TODO: Implement default data functionality
  }
  
  function data_search() {
    if (lotto.length == 0) {
      alert("Please open a Lotto file first");
      return;
    }
    
    let win_num = new Array();
    for (var i = 2; i < 7; i++) { // win_num 배열에 저장 
      win_num.push(parseInt(lotto[sel_count][i]));
    }
    
    for (var line = 1; line <= 5; line++) {
      var input = document.getElementsByClassName("input" + line);
      var num_arr = new Array();
      var bonus_str="<span>"+lotto[sel_count][8]+"</span>"; // 보너스에 관한 내용 변수 
      var win_cnt=0; // 일치여부 갯수 저장 변수
      var isBonus=false; // 보너스 번호가 있는 지 확인 하는 변수 
      var rank=0; // 등수 구하기 
      for (var i = 0; i < input.length; i++) {
        if (input[i].value != "") {
          var val = input[i].value;
          i
          if (win_num.indexOf(parseInt(val)) == -1) { // 내가 입력한 번호는 당첨 x
            num_arr.push("<span>" + input[i].value + "</span>");
          } else { // 내가 입력한 번호가 당첨번호 라면 
            num_arr.push("<strong class='red'>" + val + "</strong>");
            win_cnt++; //당첨번호 몇 개인지
        }      

        //보너스 번호 일치여부 (lotto[sel_count][0])
        if(val == parseInt(lotto[sel_count][8])){
            isBonus=true;
            //당첨번호6개가 아니다. (즉 1등 당첨이 아니라면)
            }
        }
        }
       
       switch(win_cnt){
        case 6: rank=1; break; //당첨번호 6개 일치
        case 5: if(isBonus) rank=2; // 당첨번호 5개에 보너스 
                else rank=3; break; // 당첨번호 일치가 5개만 
        case 4 : rank=4; break; // 당첨번호 일치가 4개 
        case 3 : rank=5; break; // 당첨번호일치가 3개
            default:
                rank="X"
       }
       
       
        if(isBonus){
            bonus_str = "<strong class='red'>"+lotto[sel_count][8]+"</strong>";
            win_cnt = win_cnt!=6 ? win_cnt+"+Bonus" : win_cnt;
        }
        if( num_arr.length==6){
            var resN = document.getElementsByClassName("resultNumber");
            resN[line-1].innerHTML=num_arr;
            // 여기에 보너스번호 출력코드 작성
            // resultBonus
            var bonus = document.getElementsByClassName("resultBonus");
            bonus[line-1].innerHTML=bonus_str;
            //여기에 일치 갯수 출력코드 작성  resultNumberSu
            var NumberSu = document.getElementsByClassName("resultNumberSu");
            NumberSu[line-1].innerText=win_cnt;

        }
            }
        }
