let data=[]; // json 데이터 저장할 배열 
let tmp_data=new Object(); // 월별 기온 데이터 저장학 객체
let year=[]; //년도 저장할 배열 



async function getData(){
    var temp = await fetch("./love.json").then((res)=>res.json()); // fetch 를 사용 
    // console.log(temp);
    return temp;

}

// 어떤것을 가장 빨리 찾아내는 방법은 그것이 아닌 다른 것을 찾기 시작하는 것이다 .
$(async function(){
    data = await getData();
    var y= new Set();
    var oldDay={y:0,m:1,d:0}; // 이전 월이 몇월 , 몇일인지 기억 
    $.each(data,function(i,item){
        var date = item.날짜.split("-"); // 각 데이터의 날짜를 기준으로 분리 배열
        y.add(date[0]); // 년도 만 저장 
        keyIn(date);
        if(oldDay.m != Number(date[1])) { //월이 변경 되었을 경우 
            tmp_data[oldDay.y][oldDay.m].평균기온 = tmp_data[oldDay.y][oldDay.m].평균기온/oldDay.d;
            tmp_data[oldDay.y][oldDay.m].최저기온 = tmp_data[oldDay.y][oldDay.m].최저기온/oldDay.d;
            tmp_data[oldDay.y][oldDay.m].최고기온 = tmp_data[oldDay.y][oldDay.m].최고기온/oldDay.d;

        }
        tmp_data[date[0]][Number(date[1])].평균기온 += item.평균기온c;
        tmp_data[date[0]][Number(date[1])].최저기온 += item.최저기온c;
        tmp_data[date[0]][Number(date[1])].최고기온 += item.최고기온c;
        oldDay.y=date[0];
        oldDay.m=Number(date[1]);
        oldDay.d=Number(date[2]);

    });
    console.log(tmp_data);
        

    });


    function keyIn(날짜){
        if( ! (날짜[0] in tmp_data) ) { // tmp_data 객체에 해당 년도가 키로 존재 하냐?
            tmp_data[날짜[0]]=new Object();
            for(var i=1; i<=12; i++){
                 tmp_data[날짜[0]][i]={
                    평균기온:0,
                    최저기온:0,
                    최고기온:0
                 }
             } 
        }
    }

    
