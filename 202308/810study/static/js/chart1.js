let ctx=""; 
let color=["#FF6347","#FFD700","#7CFC00","#008080","#0000FF",
"#BA55D3","#D2691E","#B0C4DE","#FF4500","#228B22"];

let data=new Array();
function physical(name,tall){
        this.name=name;
        this.tall=tall;

}
let cnt=0;



$(function(){
    ctx = $("#Canvas")[0].getContext("2d");
    
    $("#reg").click(function(){
            var name = $("#name").val();
            var tall = $("#tall").val();
        
            draw(name,tall);

            $("#name").val("");
            $("#tall").val("");
            $("#name").focus();
    });

})

    let oldx=oldy=0;


    function draw(name,tall){
       ctx.beginPath();
       ctx.moveTo(400,350);
       ctx.arc(400,350,300,18*Math.PI/180 , 18*Math.PI/180,true);
       ctx.fillStyle="blue";
       ctx.fill();


       ctx.beginPath();
       ctx.moveTo(400,350);
       ctx.arc(400,350,300,18*Math.PI/180 , 90*Math.PI/180,true);
       ctx.fillStyle="green";
       ctx.fill();

       ctx.beginPath();
       ctx.moveTo(400,350);
       ctx.arc(400,350,300,90*Math.PI/180 , 223.2*Math.PI/180,true);
       ctx.fillStyle="yellow";
       ctx.fill();

       ctx.beginPath();
       ctx.moveTo(400,350);
       ctx.arc(400,350,300,223.2*Math.PI/180 , 270*Math.PI/180,true);
       ctx.fillStyle="black";
       ctx.fill();
    }
