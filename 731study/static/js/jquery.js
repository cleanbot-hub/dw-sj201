// java script window.onload=function(){}
// j query => $(function(){ })



$(function(){
    // document.getElementById("box1").innerHTML="<b>빵빵</b>";
    // document.querySelector("#box1").innerText="<b>빵빵아옥지얌</>";
    $("#box1").html("<b>보일까말까 </b><br>");

    // $("#box1").text("이야아");

    // var d = document.getElementById("box1");
    // d.addEventListener("click",function(){});

    $("#box1").click(function(){
        // $("#box2").hide(3000); 해당 태그를 감추기 
        // 해당 태그를 보이기 
        // $("#box2").show(3000);
        $("#box2").toggle(2000);

    })

})