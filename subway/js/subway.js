let station=new Array(40).fill(0);

const st_name=["상수역","은선역","예림역","향숙역","영주역","선양역","상준역",
"승겹역","승겸역","수호역","수호역","민지역","태균역","길원역","철환역",
"유성온천역","중앙로역","서대전역","대전역","판암역","용문역","시청역","정부청사역",
"현충원역","탄방역","갈마역","용산역","오룡역","부산역","대구역","조치원역","세종역"
,"청주역","신탄진역","중리동역","반석역","월드컵경기장역","지족역","계림역",
"천안역","대동역"];


window.onload=function(){
    map_draw();
    
    
}
function map_draw(){ // 지도 그리기 위한 함수 
    var map=document.querySelectorAll("#map"); // $("#map")
    var out="";
    for(var i=0; i<station.length; i++){ 
        out += "<div class='station'>";
        out += "<div class='train'></div>";
        out += "<div class='mark'></div>";
        out += "<div class='name'></div>" + st_name[i] + "</div></div>";
    
    }

}
