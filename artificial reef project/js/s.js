let fish=[];
let fish_kind=[];  //어초 종류
let fish_amount=[];//어초수량
let year =[]; // 설치년도

async function getData(){
    var data = await fetch("https://api.odcloud.kr/api/15031992/v1/uddi:3c46e4ef-78dc-4da6-97b1-ad226624eff5_201911131644?page=1&perPage=500&serviceKey=dmf4bP1j26Vi7Fp%2B%2FDgCnRUANSLptixXrjDNHXRDoasZKn6hQiDcxhKn2IoSp4SfIavjt%2BBRwS391lEKXF5umA%3D%3D").then((res)=>res.json()).then((r)=>r);
    //console.log(data.data);
    return data.data;
}

$(async function(){
    fish = await getData();
    //어초종류
    var kind= new Set();
    var amount = new Set();
    var y = new Set();
    $.each(fish,function(i,item){   
        kind.add(item.어초종류);
        amount.add(Number(item.어초확인수량));
        y.add(Number(item.설치년도));
    });
    fish_kind = Array.from(kind);
    fish_amount = Array.from(amount).sort(function(a,b){return a-b;});

    var inc = parseInt(fish_amount.length/5);
    fish_amount=[ Math.round(fish_amount[inc]/10)*10, Math.round(fish_amount[inc*2]/10)*10, 
    Math.round(fish_amount[inc*3]/10)*10,Math.round(fish_amount[inc*4]/10)*10];
    
    year = Array.from(y);


    make_checkbox(year, "#install_year","year");
    make_checkbox(fish_amount, "#fish_amount","amount");
    make_checkbox(fish_kind, "#fish_kind","kind");

    console.log(fish_amount);

    // let st = new Set(["김승겸","김선향","송은선","신상수","임민지","김선향"]);
    // st.add("안태균");
    // st.delete("송은선");
    // st.has("신상수"); // 셋 안에 값이 존재하면 true 없으면 false
    // st.size;//  셋의 크기
    // st.clear();// 셋 비우기
    // console.log(st);
});

function make_checkbox(arr, id, name){
    $.each(arr,function(i,data){
        $(id).append("<span class='chk'>"+
        "<input type='checkbox' name='"+name+"' value='"+data+"'>"+
        "<label>"+data+"</label></span>");
    });
}