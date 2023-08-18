let data=new Object();

const types=["하이브리드","수소","경유","휘발유","전기"];

async function getData(){
    var temp = await fetch("./car.json").then((res)=>res.json());
    console.log(temp);
    refine(temp);
}

$( async function(){
    await getData();
    const ctx = $("#car")[0];

 var fuel = Object.keys(data);
    var year = Object.keys(data[types[0]]);

    
    new Chart(ctx,{
        type:"line",
        data:{
            labels:year,
            datasets:
            [
                {
                    label:fuel[0],
                    data:data[fuel[0]],
                    borderColor:"DarkTurquoise",
                    backgroundColor:"DarkTurquoise",
                    yAxisID:"하이브리드",
                    fill:false
                },
                {
                    label:fuel[1],
                    data:data[fuel[1]],
                    borderColor:"DodgerBlue",
                    backgroundColor:"DodgerBlue",
                    yAxisID:"수소",
                    fill:false
                },
                {
                    label:fuel[2],
                    data:data[fuel[2]],
                    borderColor:"Orange",
                    backgroundColor:"Orange",
                    yAxisID:"경유",
                    fill:false
                },
                {
                    label:fuel[3],
                    data:data[fuel[3]],
                    borderColor:"LightCoral",
                    backgroundColor:"LightCoral",
                    yAxisID:"휘발유",
                    fill:false
                },
                {
                    label:fuel[4],
                    data:data[fuel[4]],
                    borderColor:"SpringGreen",
                    backgroundColor:"SpringGreen",
                    yAxisID:"전기",
                    fill:false
                },
            ]
        },
        options:{
            // plugins:{legend:{labels:{font:{size:20}}}},
            scales:{
               
            }
        }
    });
});
function refine(temp){
    $.each(temp,function(i,c){
        var type='';
        if( (type=include(c.DTCONT)) == '' || c.PURPOS_DIV==="사업용") return true;
        if( !(type in data)) // 연료명으로 key가 있냐 없냐
            data[type]=new Object();  // 없으면 연료명으로 key 생성
        if( !( c.REG_YY in data[type]) ) // 년도로 키가 있냐 없냐
            data[type][c.REG_YY]=Number(c.RIDNG_ODR); //없으면 년도 키 생성 하고 키에 승용차수저장
        else
            data[type][c.REG_YY]+=Number(c.RIDNG_ODR);//승용차수 누적
    });
    console.log(data);
}
function include(kind){
    for(var i in types){
        if(kind.indexOf(types[i]) > -1)
            return types[i];
    }
    return '';
}