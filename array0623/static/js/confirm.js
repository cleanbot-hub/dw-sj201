import { fileLoad} from "./fileLoad";



window.onload=function(){
    var drwNo = document.querySelector("#drwNo");
    var btnDefault = document.querySelector("#btnDefault");
    var btnSearch=document.querySelector("#btnSearch");
    btnDefault.addEventListener("click",data_default);
    btnSearch.addEventListener("click",data_search);
    var file = document.querySelector("#lotto"); //css에서의 id가 lotto인걸 가져오기
        file.addEventListener("input", function(e){
            let target = e.target;//선택된 파일참조
            let files = target.files;//선택 된 파일은 배열의 형식으로 저장된다. 
            //첫번째 파일 참조를 해야 내가 선택한 파일을 찾을 수 있다.
            //alert(files[0]); 파일선택하면 알림창이 뜬다.
            let reader=new FileReader();
            reader.addEventListener("load", function(){
                var str = reader.result;
                //alert(reader.result); txt파일 내용이 알림창에 뜬다.
                var temp=str.split("\n");// split("\n") \n(new line -> enter) 분리하라. 

                for(var i in temp){//for(var i=0; i<temp.length;i++)과 같은 조건
                    //배열을 사용할 때 더 유용한 for문
                    lotto.push(temp[i].split("\t"));//tab을 분리하라.
                }
                //alert(str.split("\n")[0]); 인덱스 0인 자료 출력 -> 1073회차 당첨번호만 알림창에 뜬다.
            
            
            
            
            
            });
            reader.readAsText(files[0]);
        });

        var opt="";
        for(var i=1073; i>1; i--)
        opt+="<option>"+i+"</option>"
        drwNo.innerHTML=opt;
        
}
function data_default(){

}

function data_search(){

} 
