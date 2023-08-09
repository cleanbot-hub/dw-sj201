let data=[]; // json 데이터 저장할 변수 
let fire_stat= new Object(); // 



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
            $("#name tr").append("<td>"+key+"</td>");
            $("#figure").prepend()

        });

      console.log(keys);
 
    
 
 });