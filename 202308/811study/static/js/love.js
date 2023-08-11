let data=[]; // json 데이터 저장할 배열 
let tmp_data=new Object(); // 월별 기온 데이터 저장학 객체
let year=[]; //년도 저장할 배열 



async function getData(){
    var temp = await fetch("./love.json").then((res)=>res.json()); // fetch 를 사용 
    // console.log(temp);
    return temp;

}

$(async function(){
    data = await getData();
    var y= new Set();

    $.each(data,function(i,item){
        var date = item.날짜.split("-"); // 각 데이터의 날짜를 기준으로 분리 배열
        y.add(date[0]); // 년도 만 저장 
        keyIn(date);

        tmp_data[date[0]][Number(date[1])].평균기온 += item.평균기온c;
        tmp_data[date[0]][Number(date[1])].최저기온 += item.최저기온c;
        tmp_data[date[0]][Number(date[1])].최고기온 += item.최고기온c;

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

    
