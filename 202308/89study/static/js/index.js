let data=[]; // json 데이터 저장할 변수 
let fire_stat= new Object(); // 
var i=50;


async function getData(){ // fetch traffic.json 불러오기 
    var temp = await fetch("./traffic.json").then((r)=>r.json());
    
    return temp.body.items;

}

$(async function(){ // each 시작 
        data = await getData();
        $.each(data,function(i,item){
        if(item.rsacGutFsttOgidNm in fire_stat ){ 
            fire_stat[item.rsacGutFsttOgidNm].출동건수+=item.gutCo;
            fire_stat[item.rsacGutFsttOgidNm].환자수+=item.trnfPcnt;

     }else{
        fire_stat[item.rsacGutFsttOgidNm] = { 출동건수:Number(item.gutCo),
                                            환자수:Number(item.trnfPcnt)}; 
        }
     
     }); 


        var keys = Object.keys(fire_stat);

        $.each(keys, function(i,key){
            var td1= "";
            var td2= "<tr>";
            for(var i=1; i<=fire_stat[key].출동건수; i+=10)
                td1+="<td class='red' width=5></td>";
            td1+="<td colspan='5' width=60>"+fire_stat[key].출동건수+"건</td>";

            for(var i=1; i<=fire_stat[key].환자수; i+=10)
                td2+="<td class='blue' width=5></td>";
            td2+="<td width=60>"+fire_stat[key].환자수+"명</td></tr>";
            $("#gp").append("<tr><td class='name' rowspan='2'>"+key+"</td>"+td1+"</tr>");
            $("#gp").append(td2);

        });

      console.log(keys);
 
      var cv = $("#Canvas")[0];
      var ctx = cv.getContext("2d");
      
      $("#rect").click(function(){
          ctx.fillStyle = "pink";
          ctx.fillRect(10, 10, 100, 150);
      });
      
      $("#circle").click(function(){
          ctx.beginPath();
          ctx.arc(60, 100, 50, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.fillStyle = "orange";
          ctx.fill();
      });
      
      var id;
      var x = 60; // 초기 x 좌표 (원의 가운데)
      var y = 100; // 초기 y 좌표
      var angle = Math.random() * Math.PI * 2; // 무작위 각도
      var speed = 5; // 이동 속도
      
      function drawCircle(x, y) {
          ctx.clearRect(0, 0, 500, 500);
          ctx.beginPath();
          ctx.arc(x, y, 50, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.fillStyle = "orange";
          ctx.fill();
      }
      
      $("#move").click(function(){
          clearInterval(id);
      
          id = setInterval(function(){
              x += Math.cos(angle) * speed;
              y += Math.sin(angle) * speed;
      
              // 공이 화면 밖을 벗어나면 반대 방향으로 튕기도록 처리
              if (x >= 450 || x <= 50) {
                  angle = Math.PI - angle;
              }
              if (y >= 450 || y <= 50) {
                  angle = -angle;
              }
      
              drawCircle(x, y);
          }, 50);
      });
      


    
           
                
                
            

        // ctx.moveTo(0,0);
        // ctx.lineTo(100,50);
        // ctx.stroke();

        // ctx.moveTo(50,50);
        // ctx.lineTo(50,200);
        // ctx.stroke();
            
        // // 배경색 있는 사각형 
        // ctx.fillStyle="#b281ff";
        // ctx.fillRect(20,20,50,50);
        
        // //테두리만 있는 사각형 (x좌표 , y좌표,너비, 높이)
        // ctx.strokeRect(100,50,100,50);

        // //원 (x좌표 y좌표 반지름 시작각도 끝각도 방향 )
        // ctx.beginPath();
        // ctx.strokeStyle="red";
        // ctx.arc(200,200,50,0,2*Math.PI);
        // ctx.stroke();


        // //텍스트 
        // ctx.fillStyle="pink";
        // ctx.font="30px Arial"
        // ctx.fillText("눈빛교환",200,50);
    
        // //그라디언트 

        // var grd=ctx.createLinearGradient(0,0,100,0);
        // // createConicGradient , createRadialGradient
        // grd.addColorStop(0,"blue");
        // grd.addColorStop(0.9,"brown");
        // grd.addColorStop(1,"white");

        // ctx.fillStyle=grd;
        // ctx.fillRect(50,300,100,200);

 });