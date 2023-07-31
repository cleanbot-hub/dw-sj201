// java script window.onload=function(){}
// j query => $(function(){ })



$(function(){
    // document.getElementById("box1").innerHTML="<b>빵빵</b>";
    // document.querySelector("#box1").innerText="<b>빵빵아옥지얌</>";
    $("#box1").html("<b>이야</b><br>");

    // $("#box1").text("이야아");

    // var d = document.getElementById("box1");
    // d.addEventListener("click",function(){});

    $("#box1").click(function(){
        alert("이야야야야!");
    })

})